jQuery("a").filter(function() {
  var e = /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/;
  return e.test(jQuery(this).attr("href"))
}).on("click",function(e){
  ga('send', 'event', "Download", "download: "+jQuery(this).attr("href"), "from: "+document.location.href.toString());
});