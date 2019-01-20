import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({node}, index) => (
        <h4  key={index}>{node.frontmatter.title}</h4>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }`

export default IndexPage

