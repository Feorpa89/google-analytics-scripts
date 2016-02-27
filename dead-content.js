jQuery("h1, h2, h3, h4, h5, h6").filter(function() {
  var e = jQuery(this);
  return !e.parents("a").length && !e.find("a").length
}).on("click",function(e){
  var dead_content = jQuery(this).html();
  if(dead_content.length > 100) {
    dead_content = dead_content.substring(0,100)+'...';
  }
  ga('send', 'event', "dead content", "dead header click: "+dead_content, "from: "+document.location.href.toString(), {'nonInteraction': true});
});
jQuery("img").filter(function() {
  return !jQuery(this).parents("a").length
}).on("click",function(e){
  ga('send', 'event', "dead content", "dead image click: "+jQuery(this).attr("src"), "from: "+document.location.href.toString(), {'nonInteraction': true});
});