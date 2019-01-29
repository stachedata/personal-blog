import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header/header'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
  <>
    <Header/>
    <Layout>
      <div>
        <h3 style={{
          textAlign: 'center',
          margin: '60px 0',
        }}>{post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }}
        style={{
          margin: '0 25%',
          fontSize: '19px',
        }} />
      </div>
    </Layout>
  </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`