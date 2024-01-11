const fjord: FjordProps = {
	site_name: 'fjord.dev', // site name: used in the header and footer
	site_domain: 'https://fjord.dev', // site domain: used in the sitemap
	site_title: 'Fjord | Opinionated Next JS and Wordpress Starter by Alpine Codex',
	site_description:
		"Fjord is an opinionated Next JS and Wordpress starter. It's built to be a solid foundation for your next project.",
	posts_per_page: 9,
	wordpress_url: 'https://windpress.wpenginepowered.com',
	google_analytics_id: 'G-7VM8KZENP7',

	logo: '../logo.svg',

	// change the font using `next/font` in `layout.tsx` in the app directory.
	// check out the docs here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts

	menu: {
		main: {
			home: '/', // Don't Change
			blog: '/posts', // default is `/posts`
			about: '/about', // you can remove this if you don't want an about page
			contact: '/contact' // you can remove this if you don't want a contact page
		},
		content: {
			authors: '/posts/authors', // default is `/posts/authors`
			categories: '/posts/categories', // default is `/posts/categories`
			tags: '/posts/tags', // default is `/posts/tags`
			pages: '/all' // default is `/all`
		},
		legal: {
			privacy_policy: '/privacy-policy', // default is `/privacy-policy`
			privacy_policy_text: 'Privacy Policy', // default is `Privacy Policy`
			terms_of_service: '/terms-of-service', // default is `/terms-of-service`
			terms_of_service_text: 'Terms of Service' // default is `Terms of Service`
		},
		cta: '/posts' // Link to CTA
	},

	nav_menu: {
		title: 'Components',
		items: [
			{
				title: 'Typography',
				href: 'https://github.com/9d8dev/craft/wiki/components#typography',
				description: 'Styles for headings, paragraphs, lists, and other inline elements.'
			},
			{
				title: 'Layout Components',
				href: 'https://github.com/9d8dev/craft/wiki/components#layout-components',
				description:
					'Components that help you lay out your content, like Main, Craft.Section, and Craft.Container.'
			},
			{
				title: 'Navigation',
				href: 'https://github.com/9d8dev/craft/wiki/components#nav-component',
				description: 'A Navigation component that helps you build accessible navigation menus.'
			},
			{
				title: 'Footer',
				href: 'https://github.com/9d8dev/craft/wiki/components#footer-component',
				description: 'A Footer component that helps you build footers.'
			}
		]
	},

	directory_menu: {
		title: 'Learn Fjord',
		items: [
			{
				title: 'Documentation',
				href: 'https://github.com/9d8dev/fjord',
				description: 'Styles for headings, paragraphs, lists, and other inline elements.'
			},
			{
				title: 'Layout Components',
				href: 'https://github.com/9d8dev/fjord',
				description:
					'Components that help you lay out your content, like Main, Craft.Section, and Craft.Container.'
			},
			{
				title: 'Navigation',
				href: 'https://github.com/9d8dev/craft/wiki/components#nav-component',
				description: 'A Navigation component that helps you build accessible navigation menus.'
			}
		]
	}
};

export default fjord;
