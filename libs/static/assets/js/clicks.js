$(window).resize(function(){
   var width = $(window).width();
   if(width<990){
     $('#border.about').show();
   }
   else{
     $('#border.about').hide();
   }
 })
 .resize();

$("body").on('click', '.pointer-wrap a', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 1000);
});

$("body").on('click', '.pointer-wrap svg', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 1000);
});

$('body').on('click touchstart', '#button-top h4', function() {
    $('html, body').animate({
        scrollTop: $('.email-sect').offset().top
    }, 2500);
});


  //hide scroll on modal
$('body').on('click','.btn', function(){
    $('body').css('overflow-y', 'hidden');
    $('body').css('overflow-x', 'hidden');
}).on('click','.cd-modal-close', function(){
    $('body').css('overflow-x', 'visible');
    $('body').css('overflow-y', 'visible');
})
