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


  var sections = $('section')
   , nav = $('nav')
   , nav_height = nav.outerHeight();

 $(window).on('scroll', function () {
   var cur_pos = $(this).scrollTop() + 1;

   sections.each(function() {
     var top = $(this).offset().top - nav_height,
         bottom = top + $(this).outerHeight();

     if (cur_pos >= top && cur_pos <= bottom) {
       nav.find('a').removeClass('active');
       sections.removeClass('active');

       $(this).addClass('active');
       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
     }
   });
 });

 nav.find('a').on('click touchstart', function () {
   var $el = $(this)
     , id = $el.attr('href');

   $('html, body').animate({
     scrollTop: $(id).offset().top - nav_height
   }, 500);

   return false;
 });

$(window).scroll(function(event){
   var contTop = $(this).scrollTop();
   var textpos = $('.top-wrapper').offset().top;
   if(textpos <= contTop){
     $('.top-text').hide('slow');
     $('#button-top').hide('slow')
   }if(contTop < textpos) {
     $('.top-text').show('slow');
    $('#button-top').show('slow')
   }
  if (contTop >= 600){
    $('.nav-bar').css('background','rgba(255, 255, 255,.8)');
    $('.nav-bar').css('box-shadow', '0px 1px 5px  #888888');
    $('nav a').css('color', '#FDCD3B');
  }if(contTop < 600){

    $('.nav-bar').css('background', 'none');
    $('.nav-bar').css('box-shadow', 'none');
    $('nav a').css('color', 'white');
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

var email = $('email-wrap h1').position();

$('body').on('click touchstart', '#button-top h4', function() {
    $('html, body').animate({
        scrollTop: $('.email-wrap').offset().top + 50
    }, 700);
});

$('body').on('click touchstart', '.serv', function() {
    $('html, body').animate({
        scrollTop: $('.container').offset().top + 50
    }, 700);
});

$('body').on('click touchstart', '.work', function() {
    $('html, body').animate({
        scrollTop: $('.work-container').offset().top
    }, 700);
});

$('body').on('click touchstart', '.about', function() {
    $('html, body').animate({
        scrollTop: $('.about-wrapper').offset().top
    }, 700);
});

$('body').on('click touchstart', '.cont', function() {
    $('html, body').animate({
        scrollTop: $('.email-wrap').offset().top
    }, 700);
});

  //hide scroll on modal
$('body').on('click','.btn', function(){
    $('body').css('overflow-y', 'hidden');
    $('body').css('overflow-x', 'hidden');
}).on('click','.cd-modal-close', function(){
    $('body').css('overflow-x', 'visible');
    $('body').css('overflow-y', 'visible');
});

$('body').on('keyup', function(e){
  if(e.which == 27){
    $('body').css('overflow-y', 'visible');
    $('body').css('overflow-x', 'visible');
  }
});
