$(document).ready(function(){

    if($(window).width() <= 768) {
        $('.header-nav__burger').click(function(){
            $('#navbar').slideToggle();
            $(this).toggleClass('actived');
        });
    }

});