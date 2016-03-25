$('h1,h2,h3,h4,h5,h6').filter(function() {
  var e = $(this);
  return !e.parents('a').length && !e.find('a').length
}).on('click',function(e){
  var dead_content = $(this).html();
  if(dead_content.length > 100) {
    dead_content = dead_content.substring(0,100) + '...';
  }
  dataLayer.push({
    'event'         : 'ga-event',
    'eventCategory' : 'dead content',
    'eventAction'   : 'dead header click: ' + dead_content,
    'eventLabel'    : 'from: ' + document.location.href.toString(),
    'nonInteraction': true
  });
});
$('img').filter(function() {
  return !$(this).parents('a').length
}).on('click',function(e){
  dataLayer.push({
    'event'         : 'ga-event',
    'eventCategory' : 'dead content',
    'eventAction'   : 'dead image click: ' + $(this).attr('src'),
    'eventLabel'    : 'from: ' + document.location.href.toString(),
    'nonInteraction': true
  });
});