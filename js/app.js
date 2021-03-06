$('body').scrollspy({
    target: '#mainNavbar',
    offset: 100
});

$(document).scroll(function (e) {
    let scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
        $('.navbar').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
    }
});

$('a[data-smooth]').click(function() {
    let TopOffset = 75;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - TopOffset
            }, 1000);
            return false;
        }
    }
});

$(document).ready(function(){
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}