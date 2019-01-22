import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({data}) => (
  
  <Layout>
    {data.allMarkdownRemark.edges.map(({node}, index) => (
        <div key={index}>
          <Link to={node.fields.slug}>
            <span>{node.frontmatter.title}</span>
            <span> - {node.frontmatter.date}</span>
          </Link>
        </div>
    ))}
  </Layout>
  
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }`

export default IndexPage

