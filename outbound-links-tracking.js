jQuery("a").filter(function() {
    return (jQuery(this).attr("href"))?((jQuery(this).attr("href").match(/^#?https?\:/i)) && (!jQuery(this).attr("href").match(document.domain))):false;
}).on("click",function(e){
  var ext_host = (/^https?\:\/\/((\w|\.)*)/i).exec(jQuery(this).attr("href"))[1];
  var ext_URI = (/^https?\:\/\/((\w|\.)*)(.*)?/i).exec(jQuery(this).attr("href"))[3];
  ga('send','event','Outbound Link',ext_host,ext_URI);
});