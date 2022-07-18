// next.config.js
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    basePath: "/arex-help" //node
    // unstable_staticImage: true,
    // images: {
    //     unoptimized:true
    // },
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra()
