/* Back To Top Button */
// create the back to top button
$('body').prepend('<div><a href="#contact" class="register-now page-scroll"><div class="logox"><img class="bell" src="https://image.flaticon.com/icons/svg/143/143361.svg"></div> Register now</a></div>');
var amountScrolled = 700;
var amountScrolledBottom = 2800;
$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled && $(window).scrollTop() < amountScrolledBottom) {
        $('a.register-now').fadeIn('500');
    } else {
        $('a.register-now').fadeOut('500');
    }
    if ($(window).scrollTop() > amountScrolledBottom) {
        $('a.register-now').fadeOut('500');
    }
});