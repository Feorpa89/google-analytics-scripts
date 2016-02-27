jQuery("a").filter(function() {
    return (jQuery(this).attr("href"))?(jQuery(this).attr("href").match(/^mailto\:/i)):false;
}).on("click",function(e){
  var mail_link = jQuery(this).attr("href").replace(/^mailto\:/i, '');
  dataLayer.push({
    'event': 'ga-event',
    'category': 'email link',
    'action': mail_link,
    'label': 'from: ' + window.location.href
  });
});