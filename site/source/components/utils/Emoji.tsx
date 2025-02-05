import emojiFn from 'react-easy-emoji'

type PropType = {
	emoji: string | undefined
	alt?: string
	title?: string
}

// This custom component has several advantages over the direct use of the
// `emojiFn` provided by `react-easy-emoji` :
// - allow to configure the URL to self host twemoji images in production
// - using a real React component works better with the translation scripts
export default function Emoji({ emoji, alt, title }: PropType) {
	alt ??= emoji

	if (!emoji) {
		return null
	}

	return emojiFn(emoji, {
		baseUrl: '/twemoji/2/',
		protocol: '' as 'https', // Hack to use relative path
		ext: '.png',
		props: {
			alt,
			title,
		},
	})
}
