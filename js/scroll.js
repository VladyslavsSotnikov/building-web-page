$(document).ready(function(){

    $("#next").click(function(event){
        event.preventDefault();
        var top = $(".offer").offset().top;
        $("html, body").animate({
            scrollTop: top-100
        }, 1000);
    });

    $("#nextOffer").click(function(event){
        event.preventDefault();
        var top = $(".step").offset().top;
        $("html, body").animate({
            scrollTop: top-100
        }, 1000);
    });

    $(".parallaxWork__link").click(function(event){
        event.preventDefault();
        var top = $("#service1").offset().top;
        $("html, body").animate({
            scrollTop: top-100
        }, 1000);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#btn-top').fadeIn();
        }
        else{
            $('#btn-top').fadeOut();
        }
    });

    $('#btn-top').click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

});