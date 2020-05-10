$(document).ready(function(){
    $(".burger").click(function(event){
        $(".header__nav").toggleClass("header__nav_active");
        $(".burger").toggleClass("burger_active");
    });
});