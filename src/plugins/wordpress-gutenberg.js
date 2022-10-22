const blockLibrary = await
    import('http://127.0.0.1:8080/wp-includes/css/dist/block-library/style.min.css', {
        assert: { type: 'css' }
    });
const dashicons = await
    import('http://127.0.0.1:8080/wp-includes/css/dashicons.min.css', {
        assert: { type: 'css' }
    });
document.adoptedStyleSheets = [
    blockLibrary.default,
    dashicons.default
]