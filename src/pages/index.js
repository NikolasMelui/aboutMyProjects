import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
	<div>
		<h1>{data.contentfulProject.title}</h1>
		<p>{data.contentfulProject.description}</p>
		<img src={data.contentfulProject.image.resolutions.src} />
	</div>
);

export default IndexPage;

export const query = graphql`
	query PageQuery {
		contentfulProject {
			title
			description
			image {
				id
				resolutions(width: 300, height: 300, resizingBehavior: THUMB) {
					src
				}
			}
		}
	}
`;
