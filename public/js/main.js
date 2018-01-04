$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

const amountScrolled = 300;

$(window).scroll(() => {
  if ($(window).scrollTop() > amountScrolled) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

$('a.back-to-top').click(() => {
  $('html, body').animate({
    scrollTop: 0,
  }, 700);
  return false;
});

/*
Original try with a fixed button, almost did it !!
$('#to-top').click(function(){
	$(window).scrollTop(300);
}); */
