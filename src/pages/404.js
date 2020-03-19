import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Are you lost?</h1>
    <p>Page that you requested is doesn't exists . . .</p>
  </Layout>
)

export default NotFoundPage
