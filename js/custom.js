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
document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ["<b>PetWell Labs....</b>", "Provide Home remedies<br> for you loving <b>pet...</b>", ];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, );
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function() {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});