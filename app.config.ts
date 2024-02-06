export default defineAppConfig({
  docus: {
    title: 'Aim Arena Documentation',
    description: 'The best place to start your documentation.',
    image: '/favicon2.ico',

    socials: {
      github: 'https://github.com/siddharth220/aim-arena-source',
      twitter: '',
      youtube: 'https://www.youtube.com/watch?v=TWg75e6QsOk&list=PLTjPwwL9_KGsuNv7Z1-B-PpBQeH6nVIVp'
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'Aim Arena Documentation'
    },

    footer: {
      credits: {
        icon: '',
        text: '©2023 | Aim Arena All Rights Reserverd',
        href: ''
      },

      fluid: true
    }
  }
})