import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

export const Quote = ({ slice }) => (
  <section className="content-section quote">
    <blockquote>{RichText.asText(slice.primary.quote.richText)}</blockquote>
  </section>
)

export const query = graphql`
  fragment PageDataBodyQuote on PrismicPageDataBodyQuote {
    primary {
      quote {
        richText
      }
    }
  }
  fragment HomepageDataBodyQuote on PrismicHomepageDataBodyQuote {
    primary {
      quote {
        richText
      }
    }
  }
`
