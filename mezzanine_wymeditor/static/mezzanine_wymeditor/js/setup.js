jQuery(function($) {
    'use strict';

    var wymInternalImage = function(wym) {
        var html = '<li class="wym_tools_internal_image">' +
                   '<a name="InternalImage" title="Internal Image" href="#" class="wym_tools_internal_image_link">' +
                   'Insert Internal Image' +
                   '</a></li>',
            wymBox = $(wym._box);

        wymBox.find(wym._options.toolsSelector + wym._options.toolsListSelector)
            .append(html);
        wymBox.find('.wym_tools_internal_image').click(function(e) {
            e.preventDefault();

            mediaLibrary.open(function(url) {
                var stamp = wym.uniqueStamp(),
                    img;

                if (url) {
                    wym._exec(WYMeditor.INSERT_IMAGE, stamp);

                    img = $('img[src$=' + stamp + ']', wym._doc.body);
                    img.attr(WYMeditor.SRC, url);
                }
            }, 'image');
        });
    };

    // Apparently some versions of jQuery, even though still support the
    // "browser" property, don't include all kinds of detection, which breaks
    // WYMeditor's attempts to assign a proper editor implementation.
    var setupjQueryBrowser = function() {
        var matched = $.uaMatch(navigator.userAgent),
            browser = {};

        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
        }

        // Chrome is Webkit, but Webkit is also Safari.
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }

        $.browser = browser;
    };

    setupjQueryBrowser();

    $('.wymeditor').wymeditor({
        logoHtml: '',
        lang: window.__language_code || 'en',
        updateSelector: 'input[type=submit],',
        updateEvent: 'click',
        containersItems: [
            {'name': 'P', 'title': 'Paragraph', 'css': 'wym_containers_p'},
            {'name': 'H1', 'title': 'Heading_1', 'css': 'wym_containers_h1'},
            {'name': 'H2', 'title': 'Heading_2', 'css': 'wym_containers_h2'},
            {'name': 'H3', 'title': 'Heading_3', 'css': 'wym_containers_h3'},
            {'name': 'H4', 'title': 'Heading_4', 'css': 'wym_containers_h4'},
            {'name': 'H5', 'title': 'Heading_5', 'css': 'wym_containers_h5'},
            {'name': 'H6', 'title': 'Heading_6', 'css': 'wym_containers_h6'},
            {'name': 'PRE', 'title': 'Preformatted', 'css': 'wym_containers_pre'},
            {'name': 'BLOCKQUOTE', 'title': 'Blockquote', 'css': 'wym_containers_blockquote'},
            {'name': 'TH', 'title': 'Table_Header', 'css': 'wym_containers_th'}
        ],
        classesItems: [
            {'name': 'img_left', 'title': 'IMG: left-aligned', 'expr': 'img'},
            {'name': 'img_left_nospacetop', 'title': 'IMG: left-aligned (nospace)', 'expr': 'img'},
            {'name': 'img_right', 'title': 'IMG: right-aligned', 'expr': 'img'},
            {'name': 'img_right_nospacetop', 'title': 'IMG: right-aligned (nospace)', 'expr': 'img'},
            {'name': 'img_block', 'title': 'IMG: block', 'expr': 'img'},
            {'name': 'img_block_nospacetop', 'title': 'IMG: block (nospace)', 'expr': 'img'}
        ],
        postInit: function(wym) {
            // Initialise plugins
            wym.table();
            wym.resizable({handles: 's,e', maxHeight: 600});

            // Add "insert internal image" button
            wymInternalImage(wym);
        }
    });
});
