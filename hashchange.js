$(function () {
  $(window).bind('hashchange', function () {
    dataLayer.push({
      'event': 'ga-pageview',
      'page': location.pathname + location.search + location.hash
    });
  });
});