const handleMenuClick = () => {
    let menuOpen= $('#header-nav-handle');
    let menuClose = $('#nav-close');
    let menuDropdown = $('#header-nav-container');

    menuOpen.click(() => {
        menuDropdown.animate({
            left: 0
        }).addClass('open');
        document.body.style.overflowY = 'hidden';
    });
    menuClose.click(() => {
        menuDropdown.animate({
            left: '-100%'
        }).removeClass('open');
        document.body.style.overflowY = 'visible';
    });
}
handleMenuClick();