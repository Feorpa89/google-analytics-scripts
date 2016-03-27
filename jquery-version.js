if(window.jQuery) {
  var eventAction = $.fn.jquery;
} else {
  var eventAction = '(not set)';
}
dataLayer.push({
  'event'         : 'ga-event',
  'eventCategory' : 'jquery',
  'eventAction'   : eventAction,
  'eventLabel'    : 'from: ' + document.location.href.toString(),
  'nonInteraction': true
});