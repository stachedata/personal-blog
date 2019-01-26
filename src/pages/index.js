import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({data}) => (
<>
  <div 
    style={{
      textAlign: 'center',
      margin: '50px 0 50px 0'
    }}>
    <h3>Words from a Dude</h3>
    <Link 
      to="/about"
      style={{
        color: 'black',
        textDecoration: 'none',
      }}>About the Dude</Link>
  </div>
  <Layout>
    {data.allMarkdownRemark.edges.map(({node}, index) => (
        <div 
          key={index} 
          style={{
            padding: '2% 0',
            textAlign: 'center',
            border: 'solid',
            margin: '0 18rem',
            // minWidth: '500px',
            // maxWidth: '500px'
          }}
        >
          <Link 
            to={node.fields.slug}
            style={{
              color: 'black',
              textDecoration: 'none',
              padding: '15px 10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline'
            }}
          >
            <span 
              style={{
                borderTopStyle: 'double',
                borderBottomStyle: 'double',
                padding: '15px 10px'
              }}>{node.frontmatter.date}</span>
            <span 
              style={{
              }}>{node.frontmatter.title}</span>
          </Link>
        </div>
    ))}
  </Layout>
</>
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

