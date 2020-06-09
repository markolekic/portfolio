/////////////////
///////////Navbar

$(document).ready(function() {
    $('.js-about-scroll-section').waypoint(function(direction) {
        if (direction == 'down') {
            $('.first-nav').addClass('fixed-top');
            $('.first-nav').addClass('nav-colorchange a');
            $('.first-nav').addClass('first-nav-down');
            $('.navbar-light').addClass('navbar-dark')
            $('nav').addClass('navbar-down');
            $('.logo').attr("src", "img/lekic-transparent1.png");
        } else {
            $('.first-nav').removeClass('fixed-top');
            $('.first-nav').removeClass('nav-colorchange a');
            $('.first-nav').removeClass('first-nav-down');
            $('.navbar-light').removeClass('navbar-dark')
            $('nav').removeClass('navbar-down');
            $('.logo').attr("src", "img/lekic-transparent.png");
        }
    });

    ////////////////////
    ////Smooth-scrolling

    $("a").on('click', function(e) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    //////////////
    /////////Fades
    AOS.init();
});