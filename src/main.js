$(document).ready(function(){

    var navbar = $('#navbar');

    if($(window).width() <= 768) {
        $('.header-nav__burger').click(function(){
            $(navbar).slideToggle();
            $(this).toggleClass('actived');
        });
    }
});