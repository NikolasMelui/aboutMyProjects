module.exports = {
	siteMetadata: {
		title: 'NikolasMelui - about all my projects',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `dzegfqba74y6`,
				accessToken: `39f68a1dfab8bfb9b26b29ea6d664fca165d8bef9ad6d5834a76fa3f8eb5de79`,
			},
		},
	],
};
