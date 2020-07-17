/////////////////
///////////Navbar

$(document).ready(function() {
    $('.js-about-scroll-section').waypoint(function(direction) {
        if (direction == 'down') {
            $('.first-nav').addClass('fixed-top');
            $('.first-nav').addClass('nav-colorchange a');
            $('.first-nav').addClass('first-nav-down');
            $('.navbar-light').addClass('navbar-dark');
            $('.animated-icon1 span').css("background-color", "white");
            $('nav').addClass('navbar-down');
            $('.logo').attr("src", "img/lekic-transparent1.png");
        } else {
            $('.first-nav').removeClass('fixed-top');
            $('.first-nav').removeClass('nav-colorchange a');
            $('.first-nav').removeClass('first-nav-down');
            $('.navbar-light').removeClass('navbar-dark');
            $('.animated-icon1 span').css("background-color", "black");
            $('nav').removeClass('navbar-down');
            $('.logo').attr("src", "img/lekic-transparent.png");
        }
    });

    //////Link click closing collapsed Nav
    $(document).ready(function() {
        $('#navbarSupported a').on('click', function() {
            if ($(window).width() <= 992) {
                $(".show").collapse('hide');
                $('.animated-icon1').removeClass('open');
            }
        });
        //////Hamburger
        $('.first-button').on('click', function() {
            $('.animated-icon1').toggleClass('open');
        });
        /////
        $('.navbar-brand, #contact-me .nav-link').on('click', function() {
            $('.show').collapse('hide')
            $('.animated-icon1').removeClass('open');
        });
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

function removeLocationHash(){
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL) 
}
window.addEventListener("popstate", function(event){
    removeLocationHash();
});
window.addEventListener("hashchange", function(event){
    event.preventDefault();
    removeLocationHash();
});
window.addEventListener("load", function(){
    removeLocationHash();
});
