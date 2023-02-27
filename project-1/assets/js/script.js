const init = () => {

    handle_mobileNav();
    handle_navScroll();
}

const handle_mobileNav = () => {
    let body = $('body');
    let handle = $('#mobile-handle');
    let nav = $('#mobile-nav');

    handle.length == null
        ? false
        : handle.click(e => {
            e.preventDefault();

            nav.hasClass('open')
                ? nav.removeClass('open')
                : nav.addClass('open');
            
                body.css('overflow') === 'hidden'
                    ? body.css('overflow', 'scroll')
                    : body.css('overflow', 'hidden');
        });
}

const handle_navScroll = () => {
    let current = $(window).scrollTop();
    let header = $('header');
    let timer = null;

    $(window).scroll(() => {
        timer !== null
            ? clearTimeout(timer)
            : false;
        
        $(window).scrollTop() > current
            ? header.css('top', '-100%')
            : header.css('top', '0');
        current = $(window).scrollTop();

        timer = setTimeout(() => {
            header.css('top', '0');
        }, 150);

        $(window).scrollTop() != 0
            ? header.addClass('scrolled')
            : header.removeClass('scrolled');
    })
}

init();