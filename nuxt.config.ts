const fetch = require('node-fetch')

const getDynamicRoutes = async () => {
  const { data: articles } = await (
    await fetch(
      'https://portfolio.simonwuyts.eu/portfolio/items/articles?fields=*.*'
    )
  ).json()
  const { data: cases } = await (
    await fetch(
      'https://portfolio.simonwuyts.eu/portfolio/items/cases?fields=*.*'
    )
  ).json()
  const articleRoutes = articles
    .filter(article => article.status === 'published')
    .map(article => `/articles/${article.slug}`)
  const caseRoutes = cases
    .filter(item => item.status === 'published')
    .map(item => `/work/${item.slug}`)
  return [...articleRoutes, ...caseRoutes]
}

export default {
  target: 'static',
  cache: true,

  head: {
    titleTemplate: '%s - Shubhankar Gupta',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Full stack web developer, specializing in the MERN Stack. In the lookout for learning new and robust technologies'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'ogtitle',
        property: 'og:title',
        content: 'Shubhankar Gupta - Full Stack Web Developer'
      },
      {
        hid: 'ogdescription',
        property: 'og:description',
        content: 'Full Stack Web developer and DevOps enthusiast.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://rsms.me/inter/inter.css'
      }
    ]
  },

  loading: { color: '#fff' },
  css: ['@/assets/scss/main.scss'],

  plugins: ['@/plugins/composition-api'],
  modules: ['nuxt-svg-loader', '@nuxtjs/sitemap'],
  buildModules: ['@nuxt/typescript-build'],

  build: {
    extractCSS: true,
    babel: {
      plugins: [
        [
          'prismjs',
          {
            languages: ['javascript', 'css', 'markup', 'swift'],
            css: false
          }
        ]
      ]
    }
  },

  svgLoader: {
    svgoConfig: {
      plugins: [{ prefixIds: false }]
    }
  },

  router: {
    base: '/ShubhankarKG_profile/'
  }
}
