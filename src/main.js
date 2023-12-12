$(document).ready(function(){

    $('.header-nav__burger').click(function(){
        $('#navbar').slideToggle();
        $(this).toggleClass('actived');
    });

});