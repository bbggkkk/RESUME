import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <StaticImage src="../images/logo.png" alt="로고" loading="eager" placeholder="none"/>
        Main Page
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <title>Home Page</title>
  )
}
