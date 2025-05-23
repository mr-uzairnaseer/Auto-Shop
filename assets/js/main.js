/*-----------------------------------------------------------------------------------
    Template Name: Onitir IT solution html template
    Template URI: https://webtend.biz/onitir
    Author: WebTend
    Author URI: https://www.webtend.com
    Version: 1.0

	Note: This is Main js File For custom and jQuery plugins activation Code..
-----------------------------------------------------------------------------------

/*---------------------------
	JS INDEX
	===================
    01. Preloader
    02. Scroll to top
    03. Banner Slider One
    04. Active EasyPieChart
    05. Active CounterToUp
	06. Active Progress bars
    07. Click For gtToTop
    08. Magnific Popup
    09. Team Slider
    10. Testimonial Slider
    11. Service Slider
    12. Testimonial Slider Two
    13. Clinet Carousel
    14. Portfolio Gird
    15. Portfolio Masonry
    16. Portfolio Slider
    17. Bootstrap Accordion
    18. Banner Slider Two
    19. OFF Canvas Menu
    20. Feature Masonry
    21. Mobile Menu
    22. Sticky Header

-----------------------------*/

var onitirDoc;

(function($) {
    'use strict';
    onitirDoc = {
        init: function() {
            this.topbarSearch();
            this.mainNavigation();
            this.sliderOne();
            this.easyPieChart();
            this.counterToUp();
            this.progressBar();
            this.gtToTop();
            this.magnificPopUp();
            this.teamSlider();
            this.testimonialSlider();
            this.servicesSlider();
            this.servicesSlider2();
            this.shopSlider();
            this.testimonialSliderTwo();
            this.clinetSlider();
            this.productSlider();
            this.AccerSlider();
            this.DetailSlider();
            this.Rangeslider();
            this.portfolioGird();
            this.portfolioMasonry();
            this.portfolioSlider();
            this.bootstrapAcc();
            this.sliderTwo();
            this.offCanvasMenu();
            this.Quantityincrease();
            this.featureMasonry();
            this.mobileMenu();
        },
        // topsearch
        topbarSearch() {
            var form = $('.sigma-search-form');
            $('.sigma-search>a').on('click', function(e) {
                e.preventDefault();
                $(form).show();
            });
            $('.sigma-search-form button').on('click', function(e) {
                e.preventDefault();
                $(form).hide();
            });
            $('.sigm-megamenu-nav > li').mouseover(function() {
                $(this).find('a').click();
            });
            $('.nav-tabs-menu > li').mouseout(function() {
                $(this).find('a').click();
            });
            $(".dropdown-btn>a").on('click', function(e) {
                e.preventDefault();
                var submenu = $(this).next(".cart-dropdown-menu");
                submenu.toggleClass('show');
            });
            $(document).on("click", function(event) {
                var $trigger = $(".dropdown-btn>a");
                if ($trigger !== event.target && !$trigger.has(event.target).length) {
                    $(".cart-dropdown-menu").removeClass("show");
                }
            });
        },
        // Main Navigation
        mainNavigation() {
            $(".sigma-hamburger-menu").on('click', function() {
                $(".sigma-menu-btn").toggleClass("active");
                $(".sigma-mobile-menu").toggleClass("active");
            });
            $('.menu-item-has-children>a').on('click', function(e) {
                e.preventDefault();
                var element = $(this).parent('li');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp();
                } else {
                    element.addClass('open');
                    element.children('ul').slideDown();
                    element.siblings('li').children('ul').slideUp();
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp();
                }
            });
        },
        // Slider One
        sliderOne() {
            var bannerSliderOne = $('#bannerSliderOne');

            bannerSliderOne.on('init', function(e, slick) {
                var $firstAnimatingElements = $(
                    '.single-banner:first-child'
                ).find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });

            bannerSliderOne.on('beforeChange', function(
                e,
                slick,
                currentSlide,
                nextSlide
            ) {
                var $animatingElements = $(
                    '.single-banner[data-slick-index="' + nextSlide + '"]'
                ).find('[data-animation]');
                doAnimations($animatingElements);
            });

            // active banner slider
            bannerSliderOne.slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: true,
                fade: true,
                arrows: false,
                prevArrow: '<span class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i>Prev</span>',
                nextArrow: '<span class="slick-arrow next-arrow">next<i class="fal fa-long-arrow-right"></i></span>',
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    },
                }, ],
            });

            // Do for slider animation
            function doAnimations(elements) {
                var animationEndEvents =
                    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function() {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay,
                    });
                    $this
                        .addClass($animationType)
                        .one(animationEndEvents, function() {
                            $this.removeClass($animationType);
                        });
                });
            }
        },
        // Active EasyPieChart
        easyPieChart() {
            $('.about-features').bind('inview', function(
                event,
                visible,
                visiblePartX,
                visiblePartY
            ) {
                if (visible) {
                    $('.chart').easyPieChart({
                        //your configuration goes here
                        easing: 'easeOut',
                        delay: 3000,
                        barColor: '#FF2837',
                        trackColor: '#e2e8ee',
                        scaleColor: false,
                        lineWidth: 5,
                        trackWidth: 3,
                        size: 90,
                        animate: 2000,
                    });
                    $(this).unbind('inview');
                }
            });
        },
        // Active CounterToUp
        counterToUp() {
            $('.about-features').bind('inview', function(
                event,
                visible,
                visiblePartX,
                visiblePartY
            ) {
                if (visible) {
                    $(this)
                        .find('.timer')
                        .each(function() {
                            var $this = $(this);
                            $({
                                Counter: 0
                            }).animate({
                                Counter: $this.text()
                            }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.ceil(this.Counter));
                                },
                            });
                        });
                    $(this).unbind('inview');
                }
            });

            $('.counter-box').bind('inview', function(
                event,
                visible,
                visiblePartX,
                visiblePartY
            ) {
                if (visible) {
                    $(this)
                        .find('.counter')
                        .each(function() {
                            var $this = $(this);
                            $({
                                Counter: 0
                            }).animate({
                                Counter: $this.text()
                            }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.ceil(this.Counter));
                                },
                            });
                        });
                    $(this).unbind('inview');
                }
            });

            $('.on-counter').bind('inview', function(
                event,
                visible,
                visiblePartX,
                visiblePartY
            ) {
                if (visible) {
                    $(this)
                        .find('.count')
                        .each(function() {
                            var $this = $(this);
                            $({
                                Counter: 0
                            }).animate({
                                Counter: $this.text()
                            }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.ceil(this.Counter));
                                },
                            });
                        });
                    $(this).unbind('inview');
                }
            });
        },
        // Active Progress bars
        progressBar() {
            $('.skill-progress').bind('inview', function(
                event,
                visible,
                visiblePartX,
                visiblePartY
            ) {
                if (visible) {
                    $.each($('div.progressbar'), function() {
                        $(this).css('width', $(this).attr('data-width') + '%');
                    });
                    $(this).unbind('inview');
                }
            });
        },
        // Click For gtToTop
        gtToTop() {
            $('.go-top').on('click', function() {
                $('html, body').animate({
                        scrollTop: '0',
                    },
                    1200
                );
            });
        },
        // Magnific Popup
        magnificPopUp() {
            $('.popup-video').magnificPopup({
                type: 'iframe',
                // other options
            });
        },
        // Team Slider
        teamSlider() {
            // Team Slider One
            var teamSlider = $('.team-slider-one');
            teamSlider.slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 2,
                responsive: [{
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
            // Team Slider Two
            var teamSliderTwo = $('.team-slider-two');
            teamSliderTwo.slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 2,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        },
        // Testimonial Slider
        testimonialSlider() {
            var testimonialSlide = $('.testimonial-slider');
            var testimonialAuthor = $('.testimonial-author-slider');
            testimonialSlide.slick({
                autoplay: false,
                infinite: true,
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: testimonialAuthor,
            });
            testimonialAuthor.slick({
                autoplay: false,
                infinite: true,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: testimonialSlide,
                focusOnSelect: true,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        },
        // Service Slider
        servicesSlider() {
            var slider = $('.services-slider');
            slider.slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        },

        // Service Slider
        servicesSlider2() {
            var slider = $('.services-slider-2');
            slider.slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        },
        // Service Slider
        shopSlider() {
            var slider = $('.shop-loop');
            slider.slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        },
        // Testimonial Slider Two
        testimonialSliderTwo() {
            var sliderTwo = $('.testimonials-slider-two');
            sliderTwo.slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        },
        // Clinet Carousel
        clinetSlider() {
            var cslider = $('.clinet-slider');
            cslider.slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 400,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        },

        // Product Slider
        productSlider() {
            $('.product-shop-product-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrow: true,
                prevArrow: $('.product-shop-product-left-arrow'),
                nextArrow: $('.product-shop-product-right-arrow'),
                dots: false,
                centerPadding: '9px',
                centerMode: false,
                focusOnSelect: true,
                responsive: [{
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false
                        }
                    },

                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false
                        }
                    }

                ]
            });
        },

        // Shop-accer Slider

        AccerSlider() {

            $('.slider-shop-accer').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                centerPadding: '9px',
                centerMode: false,
                arrows: true,
                prevArrow: $('.cw-product-bottom-left-arrow'),
                nextArrow: $('.cw-product-bottom-right-arrow'),
                focusOnSelect: true,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false
                        }
                    },

                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false
                        }
                    }

                ]
            });

        },

        // Shop-detail Slider

        DetailSlider() {

            $('.cw-shop-des-slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                centerMode: true,
                fade: true,
                asNavFor: '.cw-shop-des-slider-nav'
            });

            $('.cw-shop-des-slider-nav').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                asNavFor: '.cw-shop-des-slider-for',
                arrows: false,
                infinite: true,
                focusOnSelect: true,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        infinite: true,
                        focusOnSelect: true
                    }
                }]
            });

        },

        // range slider

        Rangeslider() {
            $(".js-range-slider2").ionRangeSlider({
                type: "double",
                skin: "round",
                hide_min_max: true,
                min: 0,
                max: 100,
                from: 0,
                to: 100,
                grid: false,
                postfix: "%"
            });

            $(".js-range-slider1").ionRangeSlider({
                type: "double",
                skin: "round",
                hide_min_max: true,
                min: 0,
                max: 1000,
                from: 1,
                to: 1000,
                grid: false,
                prefix: "$"
            });
        },

        // Portfolio Gird
        portfolioGird() {
            var $grid = $('.grid-isotope').isotope();
            // items on button click
            $('.grid-filter ul').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // menu active class 
            $('.grid-filter ul li').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        },
        // Portfolio Masonry
        portfolioMasonry() {
            var $grid = $('.masonry-items').isotope({
                itemSelector: '.masonry-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.masonry-item',
                },
            });
            // items on button click
            $('.masonry-filter ul').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // menu active class
            $('.masonry-filter ul li').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        },
        // Portfolio Slider
        portfolioSlider() {
            var slider = $('.portfolio-slider');
            slider.slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                speed: 900,
                centerPadding: '25%',
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            centerPadding: '20%',
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '10%',
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            centerPadding: '5%',
                        },
                    },
                    {
                        breakpoint: 400,
                        settings: {
                            centerPadding: '0',
                        },
                    },
                ],
            });
        },
        // Bootstrap Accordion
        bootstrapAcc() {
            $('.faq-accordion .card-header button').on('click', function(e) {
                $('.faq-accordion .card-header button').removeClass(
                    'active-accordion'
                );
                $(this).addClass('active-accordion');
            });
        },
        // Banner Slider Two
        sliderTwo() {
            var bannerSliderTwo = $('#bannerSliderTwo, #bannerSliderThree');

            bannerSliderTwo.on('init', function(e, slick) {
                var $firstAnimatingElements = $(
                    '.single-banner:first-child'
                ).find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });

            bannerSliderTwo.on('beforeChange', function(
                e,
                slick,
                currentSlide,
                nextSlide
            ) {
                var $animatingElements = $(
                    '.single-banner[data-slick-index="' + nextSlide + '"]'
                ).find('[data-animation]');
                doAnimations($animatingElements);
            });
            // Slider Active
            bannerSliderTwo.slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
                fade: true,
                arrows: true,
                prevArrow: '<span class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i>Prev</span>',
                nextArrow: '<span class="slick-arrow next-arrow">next<i class="fal fa-long-arrow-right"></i></span>',
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    },
                }, ],
            });
            // Do Animation
            function doAnimations(elements) {
                var animationEndEvents =
                    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function() {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay,
                    });
                    $this
                        .addClass($animationType)
                        .one(animationEndEvents, function() {
                            $this.removeClass($animationType);
                        });
                });
            }
        },
        // OFF Canvas Menu
        offCanvasMenu() {
            $('.offcanvas-trigger').on('click', function(e) {
                e.preventDefault();
                $('.off-canvas-wrap').addClass('show-off-canvas');
                $('.overly').addClass('show-overly');
            });
            $('.off-canvas-close').on('click', function(e) {
                e.preventDefault();
                $('.overly').removeClass('show-overly');
                $('.off-canvas-wrap').removeClass('show-off-canvas');
            });
            $('.overly').on('click', function(e) {
                $(this).removeClass('show-overly');
                $('.off-canvas-wrap').removeClass('show-off-canvas');
            });
        },

        // Quantity Plus-Minus
        Quantityincrease() {
            $('.quantity-left-minus').on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                var $input = $this.closest('.quantity-box').find('input');
                var value = parseInt($input.val());
                if (value > 1) {
                    value = value - 1;
                } else {
                    value = 1;
                }
                $input.val(value);
            });
            $('.quantity-right-plus').on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                var $input = $this.closest('.quantity-box').find('input');
                var value = parseInt($input.val());
                if (value < 100) {
                    value = value + 1;
                } else {
                    value = 100;
                }
                $input.val(value);
            });
        },
        // Feature Masonry
        featureMasonry() {
            $('.fetaure-masonary').isotope();
        },
        // Mobile Menu
        mobileMenu() {
            $('.mainmenu-area .main-menu .menu-items').meanmenu({
                meanMenuContainer: '.mobile-menu',
                meanScreenWidth: '991',
                meanRevealPosition: 'right',
            });
        },
    };

    // Document Ready
    $(document).ready(function() {
        onitirDoc.init();
    });

    // Window Load
    $(window).on('load', function() {
        // Preloader
        $('#preloader').delay(500).fadeOut(500);
    });

    // Window Scroll
    $(window).on('scroll', function() {
        // Scroll to top
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');

        // Sticky Header
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $('header.sticky-header').removeClass('sticky');
        } else {
            $('header.sticky-header').addClass('sticky');
        }
    });
})(jQuery);