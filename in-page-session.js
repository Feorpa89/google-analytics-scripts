/*
Script purpose:
Sends periodic events to GA while a user is active on a page.
It takes into account if the browser tab is active and if the user is interacting with the page (default timeout is 60 seconds).
If a user switches to a different tab and later comes back it will start a new "in-page session". The page session number is tracked in the GA event being sent.
*/

// Settings
var time_counter_period         = 5;  // Heartbeat frequency, in seconds
var inpage_session_timeout      = 10; // Number of seconds of inactivity that would expire the page session
var interaction_event_threshold = 25;

// Vars
var time_counter                = 0;
var inpage_session_counter      = 0;
var last_interaction_timestamp  = null;
var inpage_session_is_active    = false;
var interval;

// Function definition
function launch_time_tracking() {

	// page session
	inpage_session_is_active = true;
	inpage_session_counter = inpage_session_counter + 1;
	console.log('starting in-page session #' + inpage_session_counter);

	// time counter
	update_last_interaction_timestamp();
	interval = setInterval(function(){
		if(+ new Date() - last_interaction_timestamp > (inpage_session_timeout + 1) * 1000) {
			stop_time_tracking();
			console.log('in-page session has expired');
		} else {
			time_counter = time_counter + time_counter_period;
			console.log('hit sent! #' + time_counter);
			if(time_counter >= interaction_event_threshold) {
				var nonInteraction = false;
			} else {
				var nonInteraction = true;
			}
			dataLayer.push({
				'event'         : 'ga-event',
				'eventCategory' : 'In-Page Session',
				'eventAction'   : 'In-Page Session #' + inpage_session_counter,
				'eventLabel'    : time_counter + ' seconds spent in page',
				'eventValue'    : time_counter_period,
                'nonInteraction': nonInteraction
			});
		}
	},time_counter_period * 1000);

}
function stop_time_tracking() {
	if(inpage_session_is_active == true) {
		console.log('stopping tracking');
		inpage_session_is_active = false;
		time_counter = 0;
		clearInterval(interval);
	}
}
function check_time_tracking() {
	if(inpage_session_is_active == true) {
		update_last_interaction_timestamp();
	} else {
		launch_time_tracking();
	}
}
function update_last_interaction_timestamp() {
	last_interaction_timestamp = + new Date();
}

// Attach event listeners
document.addEventListener('visibilitychange',function(e) {
	if(document.hidden == true) {
		console.log('user went away from this tab');
		// Pause loop
		stop_time_tracking();
	} else {
		console.log('user came back to this tab');
		// Launch loop
		check_time_tracking();
	}
    console.log();
});
document.addEventListener('scroll',function(e) {
	check_time_tracking();
	console.log('user is active (performed scroll action)');
},true);
document.addEventListener('click',function(e) {
	console.log('user is active (performed click action)');
	check_time_tracking();
},true);
document.addEventListener('keypress',function(e) {
	console.log('user is active (performed keypress action)');
	check_time_tracking();
},true);

// On page load, launch loop.
$(document).ready(function() {
    launch_time_tracking();
});