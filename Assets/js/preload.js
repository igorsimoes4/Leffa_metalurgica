// Ocultar o preloader quando a página estiver completamente carregada
$(window).on('load', function () {
    $('.preloader').fadeOut('slow', function () {
        $('.content').fadeIn('slow');
    });
});