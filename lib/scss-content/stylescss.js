const content = `// 1- Import framework files
@import '1-frameworks/index';

// 2 - Import plugins
@import '2-vendor/index';

// 3 - Import base style, custom variables and mixins
@import '3-base/index';

// 4 - Import modules
@import '4-modules/index';

// 5 - Import layout  styles
@import '5-layout/index';

// 6 - Import page specific  styles
@import '6-pages/index';
`

const stylescss = {
    content: content,
    filename : './scss/styles.scss'
}

module.exports = stylescss;