import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
	<div>
		<h1>About all projects done by NikolasMelui.</h1>
		<p>Today we're going to use some new techs like graphQL and Contentful.</p>
		<Link to="/page-2/">Go to page 2</Link>
		<p>{JSON.stringify(data)}</p>
	</div>
);

export default IndexPage;

export const query = graphql`
	query PageQuery {
		allContentfulBrand {
			edges {
				node {
					product {
						id
					}
				}
			}
		}
	}
`;
