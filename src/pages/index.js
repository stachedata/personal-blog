import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import profileImg from './images/dude.png' 

const IndexPage = ({data}) => (
<>
  <div 
    style={{
      textAlign: 'center',
      margin: '50px 0 50px 0'
    }}>
    <img src={profileImg} alt='dude'></img>
    <h3 style={{fontSize: '26px'}}>Words from a Dude</h3>
    <Link 
      to="/about"
      style={{
        color: 'black',
        textDecoration: 'none',
        fontSize: '17px'
      }}>About the Dude</Link>
  </div>
  <Layout>
    {data.allMarkdownRemark.edges.map(({node}, index) => (
        <div 
          key={index} 
          style={{
            padding: '2% 0',
            textAlign: 'center',
            margin: '0 auto',
            minWidth: '500px',
            maxWidth: '500px',
          }}
        >
          <Link 
            to={node.fields.slug}
            style={{
              color: 'black',
              textDecoration: 'none',
              padding: '15px 10px',
              display: 'flex',
              alignItems: 'baseline',
              fontSize: '17px',
              flexWrap: 'wrap'
            }}
          >
            <span 
              style={{
                boxSizing: 'content-box',
                width: '25%',
                borderTopStyle: 'double',
                borderBottomStyle: 'double',
                border: '25px 25px',
                padding: '15px 20px',
                margin: '0 50px 0 5px',
                whiteSpace: 'nowrap',
                fontStyle: 'italic',
              }}>{node.frontmatter.date}</span>
            <span>{node.frontmatter.title}</span>
          </Link>
        </div>
    ))}
  </Layout>
</>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC}
    ) {
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

