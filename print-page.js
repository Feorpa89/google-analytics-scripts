jQuery("a").filter(function() {
  return (jQuery(this).attr("onclick"))?((/window\.print/i).exec(jQuery(this).attr("onclick")) != null):false;
}).on("click",function(e){
	ga('send','event','Print',window.location.href);
});