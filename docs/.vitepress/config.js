// .vitepress/config.js
export default {
  // site-level options
  // head: [
  //   [
  //     'link',
  //     { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
  //   ],
  //   [
  //     'link',
  //     { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  //   ],
  //   [
  //     'link',
  //     { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
  //   ]
  // ]
   // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base:"/template/",
  title: 'Template',
  description: 'Snippet of Code',

  themeConfig: {
  //   logo: '/logo.svg',
    nav: [
      { text: 'Networking', link: '/networking/' },
      {
        text: 'Web',
        items: [
          { text: 'UI', link: '/ui/' },
          { text: 'Tailwind', link: '/tailwind' },
          { text: 'Vue', link: '/item-2' },
          { text: 'React', link: '/item-3' }
        ]
      }
    ],
    
    // Social Media
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      }
    ],
    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}