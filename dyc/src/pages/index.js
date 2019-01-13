import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout.js'
import Image from '../components/image.js'
import SEO from '../components/seo.js'
import QuiltGallery from '../components/quilt_gallery.js'

const IndexPage = () => (
  	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Quilter Extraordinaire</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
			{/* <Image /> */}
		</div>
		<QuiltGallery />
		{/* <Link to="/page-2/">Go to page 2</Link> */}
  	</Layout>
)

export default IndexPage
