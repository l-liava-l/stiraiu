$(document).ready(function() {
    var scroller = document.getElementById('scroller');
    var angle = 0;

    setTimeout(function(){$('.fadein').fadeIn(700)}, 300);

    window.onscroll = function() {
        angle = angle + 10;
        scroller.style.transform =  'rotate('+ angle+ 'deg)';
    }

});

