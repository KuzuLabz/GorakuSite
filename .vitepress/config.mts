import { defineConfig } from 'vitepress'
import { URL, fileURLToPath } from "node:url"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Goraku",
  description: "Goraku - an anime/manga app with bonuses",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // locales: {
  //   root: {
  //     label: 'English',
  //     lang: 'en'
  //   },
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: './logo.png',
    },

    nav: [
      { text: 'Download', items: [{ text: 'Android', link: '/download/#Android' }, { text: 'Releases', link: 'https://github.com/KuzuLabz/GorakuSite/releases' }],  },
      { text: 'Features', link: '/features/overview/' },
    ],
    
    sidebar: [
      {
        text: '📲 Download',
        link: '/download/'
      },
      {
        text: '🗺️ Roadmap',
        link: '/roadmap/'
      },
      {
        text: '📌 Sources',
        link: '/sources/'
      },
      {
        text: '🗨️ Socials',
        link: '/socials/'
      },
      {
        text: '⚠️ Issues / New Features',
        link: '/issues/'
      },
      {
        text: '🪙 Sponsoring',
        link: '/sponsor/'
      },
      {
        text: '🎮 Features',
        items: [
          { text: 'Overview', link: '/features/overview/' },
          { text: 'Discover', items:[
            {text:'Explore', link:'/features/discover/explore/'}, 
            {text:'Search', link:'/features/discover/search/'},
            {text:'Media Info', link:'/features/discover/media/'},
          ] },
          { text: 'Barcode Scanner', link: '/features/bookscan/' },
          { text: 'Manga Updates', link: '/features/mangaupdates/' },
          { text: 'Fanart', link:'/features/fanart/'},
          { text: 'Music', link:'/features/music/'},
          { text: 'News', link:'/features/news/'},
          { text: 'Calendar', link: '/features/calendar/' },
          { text: 'List', link: '/features/list/' },
          { text: 'Profile', link: '/features/profile/' },
          { text: 'Customization', link: '/features/customization/' }
        ]
      }
    ],

    footer: {
      message: '<a href="https://kuzulabz.com" target="_blank">KuzuLabz</a> <span class="divider">|</span> Powered by <a target="_blank" href="https://vercel.com/home">Vercel</a>'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KuzuLabz/GorakuSite' },
      { icon: 'instagram', link: 'https://instagram.com/kuzulabz' },
      { icon: 'discord', link: 'https://discord.gg/QCMKqvBmBZ' }
    ]
  },
  vite: {
		resolve: {
			alias: [
				// {
				// 	find: /^.*VPSwitchAppearance\.vue$/,
				// 	replacement: fileURLToPath(
				// 		new URL("./theme/components/ThemeButtons.vue", import.meta.url),
				// 	),
				// },
        {
          find: /^.*VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/CustomHero.vue", import.meta.url),
          )
        }
			],
		},
	},
})
