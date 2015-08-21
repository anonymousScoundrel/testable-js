(function ($, undefined) {
  "use strict";
  $(document).ready(function () {

    $(document).foundation().foundation(
      'joyride',
      'start',
      { post_ride_callback: function () {
        $('#first-ride').addClass('hide');
      }}
    );

    $('.close-parent').off('click').on('click', function () {
      $(this).closest('.row').addClass('hide');
    });
    $('.code-example-switch').off('click').on('click', function () {
        var self = $(this);
        var codeExample = self.closest('.example-switch').next('.example-code');

        if (self.is(':checked')) {
          codeExample.removeClass('hide');
        } else {
          codeExample.addClass('hide');
        }
    });

  });
}(jQuery));
