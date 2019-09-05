$(document).ready(function() {
  $('#slider-screen').hide();

  $('#button-start').click(function() {

    setTimeout(function() {
      $("#button-screen").hide();
      $("#slider-screen").show();
    }, 5000);

  });

  if ($(window).width() > 767) {
    $('#it4').addClass('carousel-item');
  } else {
    $('#it4').removeClass('carousel-item');
  }
});

$(window).resize(function() {

  if ($(window).width() > 767) {
    $('#it4').addClass('carousel-item');

  } else {
    $('#it4').removeClass('carousel-item');

  }
});
