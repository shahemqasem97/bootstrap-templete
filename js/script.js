$(document).ready(function (){
    $('.carousel').carousel({
        interval:6000
    });
    //Show Color Option Div When Click On The Gear
    $('.gear-check').click(function (){
        $('.option-color').fadeToggle();
    });
    //Change Theme Color On Click
    var colorLi=$('.option-color ul li');
    colorLi
    .eq(0).css('backgroundColor', '#E41B17').end()
    .eq(1).css('backgroundColor', '#E426D5').end()
    .eq(2).css('backgroundColor', '#009AFF').end()
    .eq(3).css('backgroundColor', '#FFD500');
    colorLi.click(function (){
        $("link[href*='theme']").attr('href',$(this).attr('data-value'));
    });
    //Scroll Top
    var scrollButton=$('.scroll-top');
    $(window).scroll(function (){
        $(this).scrollTop()>=500 ? scrollButton.show():scrollButton.hide();
    });
    scrollButton.click(function (){
        $('body,html').animate({scrollTop:0},600);
    });
    //Nice Scroll
    $("html").niceScroll();
});
//Loading Screen
$(window).on('load',function (){
    $('.loading-overley .spinner').fadeOut(2000,
    function (){
        $('body').css('overflow','auto');
        $(this).parent().fadeOut(2000,
        function (){
            $(this).remove();
        });
    });
});

