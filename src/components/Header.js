import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { RichText } from 'prismic-reactjs'

export const Header = ({ isHomepage }) => {
  // query for navigation data from the CMS
  const queryData = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          top_navigation {
            link {
              url
            }
            link_label {
              richText
            }
          }
        }
      }
    }
  `)
  const navigation = queryData.prismicNavigation
  const topNav = navigation.data.top_navigation

  const homepageClass = isHomepage ? 'homepage-header' : ''

  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/">
        <div className="logo">Example Site</div>
      </Link>
      <nav>
        <ul>
          {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                <Link to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.richText)}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
