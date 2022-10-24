import 'https://alexbednov.work/wp-includes/js/admin-bar.min.js'
// import 'https://alexbednov.work/wp-includes/js/hoverintent-js.min.js'
// import 'https://alexbednov.work/wp-includes/js/imagesloaded.min.js'
// import 'https://alexbednov.work/wp-includes/js/masonry.min.js'
import 'https://alexbednov.work/wp-includes/js/jquery/jquery.min.js'

import 'https://alexbednov.work/wp-content/plugins/kadence-blocks/dist/vendor/slick.min.js'
import 'https://alexbednov.work/wp-content/plugins/kadence-blocks/dist/kt-slick-init.js?ver=2.4.15'

const blockLibrary = await
    import('http://127.0.0.1:8080/wp-includes/css/dist/block-library/style.min.css', {
        assert: { type: 'css' }
    });
const dashicons = await
    import('http://127.0.0.1:8080/wp-includes/css/dashicons.min.css', {
        assert: { type: 'css' }
    });
const adminBar = await
    import('http://127.0.0.1:8080/wp-includes/css/admin-bar.min.css', {
        assert: { type: 'css' }
    });


const column = await
    import('https://alexbednov.work/wp-content/plugins/kadence-blocks/dist/blocks/column.style.build.css', {
        assert: { type: 'css' }
    });


const gallery = await
    import('https://alexbednov.work/wp-content/plugins/kadence-blocks/dist/blocks/gallery.style.build.css', {
        assert: { type: 'css' }
    });


const row = await
    import('https://alexbednov.work/wp-content/plugins/kadence-blocks/dist/blocks/row.style.build.css', {
        assert: { type: 'css' }
    });


const ktBlocksSlickadminBar = await
    import('https://alexbednov.work/wp-content/plugins/kadence-blocks/dist/vendor/kt-blocks-slick.css', {
        assert: { type: 'css' }
    });


// const adminBar = await
//     import('', {
//         assert: { type: 'css' }
//     });





document.adoptedStyleSheets = [
    blockLibrary.default,
    dashicons.default,
    adminBar.default,
    column.default,
    ktBlocksSlickadminBar.default,
    row.default,
    gallery.default
]