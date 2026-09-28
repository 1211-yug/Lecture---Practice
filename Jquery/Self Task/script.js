$(document).ready(function () {
    $('.slider').cycle({
        fx: 'fade',
        speed: 3000,
        timeout: 4000,
        prev: '#prev a',
        next: '#next a'
    });
});