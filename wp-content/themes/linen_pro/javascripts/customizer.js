(function($) {
  wp.customize('blogname', function(value) {
    value.bind(function(to) {
      $('.blogname').text(to);
    });
  });
  wp.customize('blogdescription', function(value) {
    value.bind(function(to) {
      $('.blogdescription').text(to);
    });
  });
})(jQuery);
