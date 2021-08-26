$(function () {

    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    // Fixed Header
    changeClassFixed(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        changeClassFixed(scrollOffset);

    });

    function changeClassFixed(scrollOffset) {
        if (scrollOffset >= introH)
            header.addClass("fixed");
        else
            header.removeClass("fixed");
    };

    // Smooth scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data('scroll');
        var blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        if ($(document).width() <= 550)
            blockOffset -= 20;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    // Menu nav-toggle

    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

    $("#nav a").on("click", function (event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#nav-toggle").toggleClass("active");

    });

    //Contition for logo click to close burger menu

    $(".header__logo").on("click", function (event) {
        event.preventDefault();

        $("#nav").removeClass("active");
        $("#nav-toggle").removeClass("active");
    });

    // Collapse

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data('collapse');

        // $this.toggleClass("active");
        $(blockId).slideToggle();
    });

    // Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })


});