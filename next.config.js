// next.config.js
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    basePath: "/arex-help" //node
})
module.exports = withNextra()
