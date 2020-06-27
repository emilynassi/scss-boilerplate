const partials = {
  vendor: [
    {
      filename: './scss/1-vendor/_index.scss',
      type: 'index'

    },
  ],
  base: [
    {
      content: '',
      filename: './scss/2-base/_fonts.scss',
      type: 'fonts'

    },
    {
      content: '',
      filename: './scss/2-base/_base.scss',
      type: 'base'
    },
    {
      content: '',
      filename: './scss/2-base/_mediaquery.scss',
      type: 'mediaquery'
    },
    {
      content: '',
      filename: './scss/2-base/_animations.scss',
      type: 'animations'
    },
    {
      content: '',
      filename: './scss/2-base/_mixins.scss',
      type: 'mixins'
    },
    {
      content: '',
      filename: './scss/2-base/_typography.scss',
      type: 'typography'

    },
    {
      filename: './scss/2-base/_index.scss',
      type: 'index',
    }
  ],
  modules: [
    {
      content: '',
      filename: './scss/3-modules/_buttons.scss',
      type: 'buttons'
    },
    {
      content: '',
      filename: './scss/3-modules/_icons.scss',
      type: 'icons'
    },
    {
      content: '',
      filename: './scss/3-modules/_panel.scss',
      type: 'panel'
    },
    {
      content: '',
      filename: './scss/3-modules/_carousel.scss',
      type: 'carousel'

    },
    {
      content: '',
      filename: './scss/3-modules/_breadcrumb.scss',
      type: 'breadcrumb'
    },
    {
      filename: './scss/3-modules/_index.scss',
      type: 'index',
    }
  ],
   layout: [
    {
      content: '',
      filename: './scss/4-layout/_header.scss',
      type: 'header'
     },
     {
      content: '',
      filename: './scss/4-layout/_body.scss',
      type: 'body'
     },
     {
      content: '',
      filename: './scss/4-layout/_footer.scss',
      type: 'footer'
     },
     {
        filename: './scss/4-layout/_index.scss',
        type: 'index',
     },
   ]
};


module.exports = partials;