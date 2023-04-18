jQuery(document).ready(() => {
    $ = jQuery;

        // This function collates all the functions that need to run when the page loads
    const init = () => {

        showSliderImages();
        showCurrentPage();
    }

    const showSliderImages = () => {
            // Get html parent containers to add to
        let track = $('.img-track');
        let counter = $('.img-counter');
        let scroller = $('.img-scroll-chips');

            // Initialises the static image count (only used because the site is never going to change from it's current form) and the initial position to show the first image on load
        let img_count = 5;
        let position = 1;

            // Templates for the different dynamic parts of the scroller
        let img_template = '<img src="https://picsum.photos/1600?random={{count}}"/>';
        let scroll_template = '<div class="img-scroller"></div>';
        let counter_template = '<span class="img-counter">{{count}}</span>';

            // Runs through the code the number of times that the static counter is set to
        for (i = 0; i < img_count; i++) {

                // This ensures each random photo in the scroller is different using https://picsum.photos API
            let img_url = img_template.replace(
                '{{count}}',
                i
            );

                // Adds the image to the track and the indicator chip to the scroller track
            track.append(img_url);
            scroller.append(scroll_template);
        }

            // This takes the amount in the counter variable and writes the indicator.  Initialises as 1/5
        let count = counter_template.replace(
            '{{count}}',
            position + '/' + img_count
        );

            // Inputs the counter into the site by overwriting the version that's already there
        counter.replaceWith(count);

            // Gets the individual scroll chips and the images within the image track
        chips = scroller.find('.img-scroller');
        imgs = track.find('img');

            // Shows the first image and highlighs the first chip
        chips.first().addClass('selected');
        imgs.first().addClass('selected');

            // Runs through each chip
        chips.each((i, chip) => {
            
                /*
                 * Adds a click event handler to each chip
                 * Removes the .selected class from the identified chip and image
                 * Adds it onto the newly selected chip and image
                 * resets the indicator by using the current index to say which image has been chosen
                 */
            $(chip).click(() => {
                chips.removeClass('selected');
                imgs.removeClass('selected');

                $(chip).addClass('selected');
                imgs.eq(i).addClass('selected');

                let count = counter_template.replace(
                    '{{count}}',
                    (i + 1) + '/' + img_count
                );

                counter.replaceWith(count);
            });
        });
    }

    const showCurrentPage = () => {

            // Gets current URL and all links in the nav
        let page = window.location.pathname;
        let nav_links = $('nav li a');

            // Runs through each link and checks against the current url
        nav_links.each((i, link) => {
            let path = $(link).attr('href');

                // When the paths match the .active class is added to the respective nav link for the styling
            path == page
                ? $(link).addClass('active')
                : false;
        })
    }

        // Calls the init() function which links to all the functions that should run when the page loads
    init();
});