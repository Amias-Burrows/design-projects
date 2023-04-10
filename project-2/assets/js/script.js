jQuery(document).ready(() => {
    $ = jQuery;

    const init = () => {

        showSliderImages();
    }

    const showSliderImages = () => {
            // Get html parent containers to add to
        let track = $('.img-track');
        let counter = $('.img-counter');
        let scroller = $('.img-scroll-chips');

        let img_count = 5;
        let position = 1;

        let img_template = '<img src="https://picsum.photos/1600?random={{count}}"/>';
        let scroll_template = '<div class="img-scroller"></div>';
        let counter_template = '<span class="img-counter">{{count}}</span>';

        for (i = 0; i < img_count; i++) {

            let img_url = img_template.replace(
                '{{count}}',
                i
            );

            track.append(img_url);
            scroller.append(scroll_template);
        }

        let count = counter_template.replace(
            '{{count}}',
            position + '/' + img_count
        );

        counter.replaceWith(count);

        chips = scroller.find('.img-scroller');
        imgs = track.find('img');

        chips.first().addClass('selected');
        imgs.first().addClass('selected');

        chips.each((i, chip) => {
            
            $(chip).click(() => {
                chips.removeClass('selected');
                imgs.removeClass('selected');

                $(chip).addClass('selected');
                imgs.eq(i).addClass('selected');
            });
        });
    }

    init();
});