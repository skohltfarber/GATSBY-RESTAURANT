const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query MyQuery {
      allContentfulProduct {
        nodes {
          id
          name
          price
          type
          description {
            description
          }
          image {
            description
            title
            file {
              fileName
              url
              contentType
            }
          }
        }
      }
    }
  `)

  const productTemplate = path.resolve(`src/templates/product-page.js`)
  queryResults.data.allContentfulProduct.nodes.forEach(node => {
    createPage({
      path: `/products/${node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node,
      },
    })
  })
}