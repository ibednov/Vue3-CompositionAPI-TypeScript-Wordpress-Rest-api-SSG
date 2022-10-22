// import 'http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks.js'
import 'http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks/dist/deprecated/frontend_blocks_deprecated_v2.js'

const stackableCss = await import('http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks/dist/frontend_blocks.css', {
    assert: { type: 'css' }
});

const stackableResponsiveCss = await import('http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks/dist/frontend_blocks_responsive.css', {
    assert: { type: 'css' }
});

const stackableCssDeprecated = await
    import('http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks/dist/deprecated/frontend_blocks_deprecated.css', {
        assert: { type: 'css' }
    });
const stackableCssDeprecatedv2 = await
    import('http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks/dist/deprecated/frontend_blocks_deprecated_v2.css', {
        assert: { type: 'css' }
    });

document.adoptedStyleSheets = [
    stackableResponsiveCss.default,
    stackableCssDeprecated.default,
    stackableCssDeprecatedv2.default,
    stackableCss.default
]