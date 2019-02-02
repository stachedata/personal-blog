import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header/header'

const AboutPage = () => (
  <>
    <Header></Header>
    <Layout>
      <h3
        style={{
          textAlign: 'center',
          margin: '75px'
        }}
      >My name is Chris and I am a Web Developer.</h3>

    </Layout>
  </>
)

export default AboutPage
