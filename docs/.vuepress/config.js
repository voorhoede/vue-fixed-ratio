const pkg = require('../../package.json')

module.exports = {
    title: `${pkg.name}`,
    description: pkg.description,
    dest: `www`,
    themeConfig: {
        search: false,
        nav: [
            { text: 'v1', link: '/' },
            { text: 'Code', link: 'https://github.com/voorhoede/vue-fixed-ratio' }
        ]
    },
    plugins: [
        ['@vuepress/register-components', {
            componentsDir: `${__dirname}/../../src/`
        }],
        ['demo-code', {
            onlineBtns: { codepen: false, jsfiddle: false, codesandbox: false },
        }]
    ]
}