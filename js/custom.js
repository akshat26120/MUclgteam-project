/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});



/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/

$(document).ready(function() {


    /*-------------------------------------------------------------------------------
      Navigation - Hide mobile menu after clicking on a link
    -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });


    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });



    /*-------------------------------------------------------------------------------
      jQuery Parallax
    -------------------------------------------------------------------------------*/

    function initParallax() {
        $('#home').parallax("100%", 0.1);
        $('#about').parallax("100%", 0.3);
        $('#service').parallax("100%", 0.2);
        $('#experience').parallax("100%", 0.3);
        $('#education').parallax("100%", 0.1);
        $('#quotes').parallax("100%", 0.3);
        $('#contact').parallax("100%", 0.1);
        $('footer').parallax("100%", 0.2);

    }
    initParallax();



    /*-------------------------------------------------------------------------------
      smoothScroll js
    -------------------------------------------------------------------------------*/

    $(function() {
        $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });



    /*-------------------------------------------------------------------------------
      wow js - Animation js
    -------------------------------------------------------------------------------*/

    new WOW({ mobile: false }).init();


});

window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    // Hide the preloader and show the content after the page is fully loaded
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Change the time (in milliseconds) as needed for your preloader
});

/*-------------------------------------------------------------------------------
     wow js - Login  Animation js
   -------------------------------------------------------------------------------*/
document.querySelector('.login-button').addEventListener('mouseenter', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        this.style.animation = 'runAway 1s forwards';
    }
});