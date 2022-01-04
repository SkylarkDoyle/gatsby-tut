import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({ data }) {

  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
    
    return (
        <Layout>
        <div className={styles.portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
            {projects.map(project => (
                <Link to={'/projects/' + project.frontmatter.slug} key={project.frontmatter.id}>
                    <div>
                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                        <h3>{ project.frontmatter.title }</h3>
                        <p>{ project.frontmatter.stack }</p>
                    </div>

                </Link>
            ))}
        </div>
        <p>Like what you see, contact me @ { contact } and don't forget to buy me a coffee</p>
        </div>
        </Layout>
    )
}


export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}


  
`