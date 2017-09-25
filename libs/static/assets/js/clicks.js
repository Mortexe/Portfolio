var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header .nav-bar').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function(){
  if(didScroll){
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled(){
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  if (st > lastScrollTop && st > navbarHeight){
    $('nav').removeClass('nav-bar').addClass('nav-up');
    $('nav').css('opacity', '0');
  } else {
    if(st + $(window).height() < $(document).height()){
      $('nav').removeClass('nav-up').addClass('nav-bar');
      $('nav').css('opacity', '.7');
    }
  }
  lastScrollTop = st;
}

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


// scroll to div on click section

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
    }, 1500);
});

$('body').on('click touchstart', '.serv', function() {
    $('html, body').animate({
        scrollTop: $('.services').offset().top
    }, 1000);
});

$('body').on('click touchstart', '.work', function() {
    $('html, body').animate({
        scrollTop: $('.work-sect').offset().top
    }, 1000);
});

$('body').on('click touchstart', '.about', function() {
    $('html, body').animate({
        scrollTop: $('.about-sect').offset().top
    }, 1000);
});

$('body').on('click touchstart', '.cont', function() {
    $('html, body').animate({
        scrollTop: $('.email-sect').offset().top
    }, 1000);
});

  //hide scroll on modal
$('body').on('click','.btn', function(){
    $('body').css('overflow-y', 'hidden');
    $('body').css('overflow-x', 'hidden');
}).on('click','.cd-modal-close', function(){
    $('body').css('overflow-x', 'visible');
    $('body').css('overflow-y', 'visible');
})
