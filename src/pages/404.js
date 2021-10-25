import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

// Prismic Preview Imports
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '../utils/linkResolver'

// import other page templates for previewing an unpublished, non-existant page
import HomeTemplate from './index'
import PageTemplate from './{PrismicPage.url}'

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found" />
    <div className="container">
      <h1>Oh no!</h1>
      <h3>We can't seem to find the page you're looking for.</h3>
      <br />
    </div>
  </Layout>
)

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      homepage: HomeTemplate,
      page: PageTemplate,
    }),
  },
])
