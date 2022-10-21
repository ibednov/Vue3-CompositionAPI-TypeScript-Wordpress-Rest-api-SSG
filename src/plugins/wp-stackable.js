// import 'http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks.css'
// import 'http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks__premium_only.css'
import 'http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks.js'
import 'http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks__premium_only.js'

const stackableCss = await import('http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks.css', {
    assert: { type: 'css' }
});
const stackablePremiumCss = await import('http://127.0.0.1:8080/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks.css', {
    assert: { type: 'css' }
});
document.adoptedStyleSheets = [stackableCss.default, stackablePremiumCss.default];