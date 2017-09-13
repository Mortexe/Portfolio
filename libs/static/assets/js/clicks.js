$("body").on('click', '.pointer a', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 1000);
});

$("body").on('click', '.pointer svg', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 1000);
});

$('.open').prowl("prowl-toggle");
