$('a').filter(function() {
  return ($(this).attr('href'))?(($(this).attr('href').match(/^#?https?\:/i)) && (!$(this).attr('href').match(document.domain))):false;
}).on('click',function(e){
  var ext_host = (/^https?\:\/\/((\w|\.)*)/i).exec($(this).attr('href'))[1];
  var ext_URI  = (/^https?\:\/\/((\w|\.)*)(.*)?/i).exec($(this).attr('href'))[3];
  dataLayer.push({
    'event'        : 'ga-event',
    'eventCategory': 'Outbound Link',
    'eventAction'  : ext_host,
    'eventLabel'   : ext_URI
  });
});