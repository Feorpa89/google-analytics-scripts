if(screen.width<992){
  jQuery("a[href*='tel:']").click(function(){
    dataLayer.push({
      'event': 'ga-event',
      'category': 'phone dial',
      'action': jQuery(this).attr('href').replace('tel:','').replace('.','').replace(' ','').trim(),
      'label': jQuery(this).html()
    });
  });
}