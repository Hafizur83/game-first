/* -----------------
::: Background Set JS
----------------- */
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

/* -----------------
::: Games Slider JS
----------------- */
     $(".our-games-slider").owlCarousel({
         loop: true,
         nav: true,
         autoplay: false,
         navText: ["<span class='icofont-simple-left'><span/>", "<span class='icofont-simple-right'><span/>"],
         margin: 0,
         smartSpeed: 1200,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoHeight: false,
        responsive: {
            0: {
                items: 1,
            },
             480: {
                items: 2,
            },
            575: {
                items: 2,
            },
            768: {
                items: 3,
            }

        }
     });

/* -----------------
::: jQuery counterUp JS
----------------- */
    $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1500
    });

/* -----------------
::: STICKY MENU JS
----------------- */
    var topbutton = document.getElementById("topbtn");
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#header").addClass("sticky");
            topbutton.style.display = "block";

        } else {
            $("#header").removeClass("sticky");
            topbutton.style.display = "none";
        }
    }

/* -----------------
::: Mobile Menu JS
----------------- */
   $(document).on('click','.navbar-btn',function(){
        $('#header').addClass('mobile-nav-active')
    });
/* -----------------
::: SCROLL TO TOP JS
----------------- */
    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
