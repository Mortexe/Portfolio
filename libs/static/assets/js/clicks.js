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

$(window).scroll(function(event){
   var contTop = $(this).scrollTop();
   var textpos = $('.top-text').offset().top;
   if(150 < contTop){
     $('.top-text').hide('slow');
     $('#button-top').hide('slow')
   }if(contTop < 151) {
     $('.top-text').show('slow');
    $('#button-top').show('slow')
   }
  if (contTop >= 650){
    $('.nav-bar').css('background','rgb(250, 250, 250)');
    $('.nav-bar').css('box-shadow', '0px 2px 8px  #888888');
    $('.nav-bar ul').css('color', '#FDCD3B');
  }if(contTop < 650){
    $('.nav-bar').css('background', 'none');
    $('.nav-bar').css('box-shadow', 'none');
    $('.nav-bar ul').css('color', 'white');
  }
});

// scroll to div on click section

$("body").on('click', '.pointer-wrap a', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 700);
});

$("body").on('click', '.pointer-wrap svg', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top - 50
    }, 700);
});

$('body').on('click touchstart', '#button-top h4', function() {
    $('html, body').animate({
        scrollTop: $('.email-sect').offset().top - 50
    }, 700);
});

$('body').on('click touchstart', '.work', function() {
    $('html, body').animate({
        scrollTop: $('.work-sect').offset().top - 50
    }, 700);
});

$('body').on('click touchstart', '.about', function() {
    $('html, body').animate({
        scrollTop: $('.about-sect').offset().top - 100
    }, 700);
});

$('body').on('click touchstart', '.cont', function() {
    $('html, body').animate({
        scrollTop: $('.email-sect').offset().top - 100
    }, 700);
});

  //hide scroll on modal
$('body').on('click','.btn', function(){
    $('body').css('overflow-y', 'hidden');
    $('body').css('overflow-x', 'hidden');
}).on('click','.cd-modal-close', function(){
    $('body').css('overflow-x', 'visible');
    $('body').css('overflow-y', 'visible');
})
