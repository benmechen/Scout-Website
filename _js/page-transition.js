;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('section').smoothState({
        // Runs when a link has been activated
        onStart: {
          duration: 250, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // Scroll user to the top
            $body.animate({scrollTop: 0});
          }
        }
      }).data('smoothState');
})(jQuery);