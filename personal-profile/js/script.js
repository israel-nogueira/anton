
jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $("#loader-fade").fadeOut(800);
});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
       Nav Scroll
       ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40}, 1100);
    });
    /* ====================================
       Nav Fixed On Scroll
       ======================================= */

    if ($("nav.navbar").hasClass("static-nav")) {
        $(window).on("scroll", function () {
            var $scroll = $window.scrollTop();
            var $navbar = $(".static-nav");
            if ($scroll >= 80) {
                $navbar.addClass("fixed-menu");
            } else {
                $navbar.removeClass("fixed-menu");
            }
        });
    }

    /*bottom menu fix*/
    if ($("nav.navbar").hasClass("bottom-nav")) {
        var navHeight = $(".bottom-nav").offset().top;
        $(window).on("scroll", function () {
            if ($window.scrollTop() > navHeight) {
                $('.bottom-nav').addClass('fixed-menu');
            } else {
                $('.bottom-nav').removeClass('fixed-menu');
            }
        });
    }
    if ($("nav.navbar").hasClass("bottom-nav")) {
        $(window).on("scroll", function () {
            var $scroll = $window.scrollTop();
            var $bottom = $(".bottom-nav");
            if ($scroll >= 400) {
                $bottom.addClass("scroll-menu");
            } else {
                $bottom.removeClass("scroll-menu");
            }
        });
    }
        $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 80) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    /* ===================================
       Side Menu
       ====================================== */

    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        })
    }

    /* =====================================
            Wow
       ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /* ----- Full Screen ----- */
    function resizebanner() {
        var $fullscreen = $(".full-screen");
        $fullscreen.css("height", $window.height());
        $fullscreen.css("width", $window.width());
    }
    resizebanner();
    $window.resize(function () {
        resizebanner();
    });


    /* ===================================
       Features Section Number Scroller
       ====================================== */

    $(".stats").each(function () {
        $('.numscroller').appear(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    /* ===================================
       Animated Progress Bar
       ====================================== */

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 2000)
        });
    });

    /* ===================================
       Parallax
       ====================================== */

    if (windowsize > 992) {
        $(".parallaxie").parallaxie({
            speed: 0.4,
            offset: 0,
        });
    }

    /* =====================================
       Portfolio Filter
       ======================================= */

    /*Portfolio Two*/

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({filter: filterValue});

    });

    $('.filtering').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    setTimeout(function (){
        $('.filtering .active').click();
    }, 1500);


    /* ===================================
       Fancy Box
       ====================================== */
    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });

    /* ===================================
       Equal Heights
       ====================================== */
        checheight();
         $window.on("resize", function () {
            checheight();
        });

        function checheight() {
            var $smae_height = $(".equalheight");
            if ($smae_height.length) {
                if (windowsize > 767) {
                    $smae_height.matchHeight({
                        property: "height",
                    });
                }
            }
        }
    /* ===================================
       Type Text
       ====================================== */

    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }

    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {loop: true});
        
        personal
            .typeString('O melhor investimento').pauseFor(2000).deleteAll()
            .typeString('O mais rentável empreendimento').pauseFor(2000).deleteAll()
            .typeString('O primeiro grupo aberto de investimento').start();
    }


    /* ===================================
       Owl Carousel
       ====================================== */


    $('.testimonial-two').owlCarousel({
        loop: true,
        smartSpeed: 500,
        responsiveClass: true,
        nav:false,
        dots: true,
        dotsContainer: ".owl-thumbs",
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
                margin: 30,
            },
            992: {
                items: 1,
                margin: 30,
            }
        }
    });

    /* Brand Carousel */
    $('.brand-carousel').owlCarousel({
        margin: 75,
        nav: false,
        navText: [
            '<i class="ti ti-angle-left"></i>',
            '<i class="ti ti-angle-right"></i>'
        ],
        dots: false,
        autoWidth: false,
        autoplay: 300,
        autoplayHoverPause: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    $(document).on('click', '.btn-link-whats', function (e) {
        e.preventDefault();
        var mensagem        = encodeURIComponent($(this).data('planta'));
        var link = 'https://api.whatsapp.com/send?phone=554196821786&text=' + mensagem;
        window.open(link)

        return false;
    });


    var TEMPLATE = $('#planta-template')[0].innerHTML;
    var html = Mustache.render(TEMPLATE, 
        {
            "LISTA":[
                        {
							'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 22m - 1a9 pav.png'}],
							'REFERENCIA':'101',
							'TITULO':'Unidade 101',
                            'VALOR':'R$ 180.688,82',
							'ITENS':[
                                // { 'ITEM':'Area: 49,01' },
                                { 'ITEM':'Area: 21,92' },
                                { 'ITEM':'Avaliação: 2225.861'},
                                // { 'ITEM':'V. futura: 275,919'},
								{ 'ITEM':'Mercado: 20,00%'},
                                { 'ITEM':'Rentabilização: 45,80%'},
                                // { 'ITEM':'Mensal: 1,27%'},
                                { 'ITEM':'Entrada: R$ 36.138'},
                                { 'ITEM':'Balões: R$ 12.046'},
                                { 'ITEM':'Parcelas: 6.023'},
							],
						}

                        ,{
							'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 22m - 1a9 pav.png'}],
							'REFERENCIA':'102',
							'TITULO':'Unidade 102',
                            'VALOR':'R$ 202.038,46',
							'ITENS':[
                                // { 'ITEM':'Area:54,80' },
                                { 'ITEM':'Area:24,51' },
                                { 'ITEM':'Avaliação: 252.548'},
                                // { 'ITEM': 'V. futura: 294.572' },
								{'ITEM':'Mercado: 20,00%'},
								{ 'ITEM':'Rentabilização: 45,80%'},
								// {'ITEM':'Mensal: 1,27'},
								{ 'ITEM':'Entrada: R$ 40.408'},
								{ 'ITEM':'Balões: R$ 13.469'},
								{ 'ITEM':'Parcelas: 6.735'},
							],
						}

                        ,{
							'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 22m - 1a9 pav.png'}],
							'REFERENCIA':'103',
							'TITULO':'Unidade 103',
							'VALOR':'R$ 217.700,35',
							'ITENS':[
                                { 'ITEM':'Area: 26,41' },
                                // {'ITEM':'Area: 59,05' },
                                {'ITEM':'Avaliação: 272.125 '},
                                // {'ITEM': 'V. futura: 317.407' },
								{'ITEM':'Mercado: 20,00%'},
								{'ITEM':'Rentabilização: 45,80%'},
                                // {'ITEM':'Mensal: 1,27%'},
                                {'ITEM':'Entrada: R$ 43.540'},
                                {'ITEM':'Balões: R$ 114.513'},
                                {'ITEM':'Parcelas: 7.257'},
							],
						}
                       ,{
						   'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 22m - 1a9 pav.png'}],
						   'REFERENCIA':'105',
						   'TITULO':'Unidade 105',
                           'VALOR':'R$ 181.513,13',
							'ITENS':[
                                { 'ITEM':'Area:22,02' },
                                // { 'ITEM':'Area:49,23' },
                                { 'ITEM':'Avaliação: 2226.891'},
                                // { 'ITEM': 'V. futura: 2264.646' },
								{'ITEM':'Mercado: 20,00%'},
								{'ITEM':'Rentabilização: 45,80%'},
                                // { 'ITEM':'Mensal: 1,27%'},
                                { 'ITEM':'Entrada: R$ 36.303'},
                                { 'ITEM':'Balões: R$ 12.101'},
                                { 'ITEM':'Parcelas:6.050'},
							],
						}
                       ,{
						   'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 29m - 2a5 pav.png'}],
						   'REFERENCIA':'112',
						   'TITULO':'Unidade 112',
                           'VALOR':'R$ 234.104,13',
							'ITENS':[
                                { 'ITEM':'Area: 28,40' },
                                // { 'ITEM':'Area: 63,49' },
                                { 'ITEM':'Avaliação: 292.630'},
                                // { 'ITEM': 'V. futura: 341.324' },
								{'ITEM':'Mercado: 20,00%'},
								{'ITEM':'Rentabilização: 45,80%'},
                                // { 'ITEM':'Mensal: 1,27%'},
                                { 'ITEM':'Entrada: R$ 46.821'},
                                { 'ITEM':'Balões: R$ 15.607'},
                                { 'ITEM':'Parcelas:7.803'},
							],
						}
                       ,{
						   'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 32m - 1 pav final 13 - 2a5 pav .png'}],
						   'REFERENCIA':'113',
						   'TITULO':'Unidade 113',
                           'VALOR':'R$ 267.241,40',
							'ITENS':[
                                { 'ITEM':'Area:32,42' },
                                // { 'ITEM':'Area:72,48' },
                                { 'ITEM':'Avaliação: 334.052'},
                                // { 'ITEM': 'V. futura: 389.638' },
								{'ITEM':'Mercado: 20,00%'},
								{'ITEM':'Rentabilização: 45,80%'},
                                // { 'ITEM':'Mensal: 1,27%'},
                                { 'ITEM':'Entrada: R$ 53.448'},
                                { 'ITEM':'Balões: R$ 17.816'},
                                { 'ITEM':'Parcelas:8.908'},
							],
						}
                       ,{
						   'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 22m - 2a5 pav final 01.png'}],
						   'REFERENCIA':'201g',
						   'TITULO':'Unidade 201g',
                           'VALOR':'R$ 244.985,03',
							'ITENS':[
                                { 'ITEM':'Area:36,76' },
                                // { 'ITEM':'Area:82,19' },
                                { 'ITEM':'Avaliação: 306.231'},
                                // { 'ITEM': 'V. futura: 357.188' },
								{'ITEM': 'Mercado: 20,00%'},
								{'ITEM':'Rentabilização: 45,80%'},
                                // { 'ITEM':'Mensal: 1,27%'},
                                { 'ITEM':'Entrada: R$ 48.997'},
                                { 'ITEM':'Balões: R$ 6.332'},
                                { 'ITEM':'Parcelas:  8.166'},
							],
						}
                       ,{
						   'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 22m - 2a5 pav final 01.png'}],
						   'REFERENCIA':'401',
						   'TITULO':'Unidade 401',
                           'VALOR':'R$ 191.422,54',
							'ITENS':[
                                { 'ITEM':'Area:22,68' },
                                // { 'ITEM':'Area:50,71' },
                                { 'ITEM':'Avaliação: 252.678'},
                                // { 'ITEM': 'V. futura:294.723' },
								{ 'ITEM':'Mercado: 24,24%'},
								{ 'ITEM':'Rentabilização: 53,96%'},
                                // { 'ITEM':'Mensal: 1,50%'},
                                { 'ITEM':'Entrada: R$38.285'},
                                { 'ITEM':'Balões: R$ 12.762'},
                                { 'ITEM':'Parcelas: 4.994'},
							],
						}
                       ,{
						   'PLANTAS': [{ 'IMG':'./sources/Plantas Humanizadas/Planta 17m - Garden 606.png'}],
						   'REFERENCIA':'606g',
						   'TITULO':'Unidade 606g',
                           'VALOR':'R$ 220.734,93',
							'ITENS':[
                                {'ITEM':'Area:29,11' },
                                // {'ITEM':'Area:65,08' },
                                {'ITEM':'Avaliação: 291.370'},
                                // {'ITEM': 'V. futura: 3367.042' },
								{'ITEM':'Mercado: 24,24%'},
                                {'ITEM':'Rentabilização: 66,28%'},
                                // {'ITEM':'Mensal: 1,84%'},
                                {'ITEM':'Entrada: R$ 4.147'},
                                {'ITEM':'Balões: R$  14.716'},
                                {'ITEM':'Parcelas: 7.358'},
							],
						}
	                  ]
                })


    $('#container_plans .row').html(html)
	/* Testimonial */
	$('#container_plans .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 500,
		responsiveClass: true,
		center: true,
		nav: true,
		dots: true,
		navText: ['◀', '▶'],
		dotsContainer: ".owl-thumbs",
	});
});