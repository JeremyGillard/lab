// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          htmlAttrs: {
            lang: 'en'
          },
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1, minimal-ui', 
          title: 'Jeremy Gillard',
          meta: [
            { name: 'description', content: 'System Administrator, .NET, Javascript, Python Developer, Cyber Security and Cloud enthousiast.' },
            { name: 'keywords', content: 'Full Stack, Developer, Devops, Freelance, JavaScript, Html, CSS, Python, C#.' },
            { name: 'og:description', content: 'System Administrator, .NET, Javascript, Python Developer, Cyber Security and Cloud enthousiast.' },
            { name: 'og:title', content: 'Jeremy Gillard' },
            { name: 'twitter:title', content: 'Jeremy Gillard' },
            { name: 'google-site-verification', content: 'yMwq5_himi0_H59TnD8WTJvdYnyiU4E9JcnXt3rddW0' }
          ],
          script: [
            {
              src: 'https://kit.fontawesome.com/eb5ef3cbe3.js'
            }
          ]
        }
    },
    css: [
        '@/assets/css/global.css'
    ]
})
