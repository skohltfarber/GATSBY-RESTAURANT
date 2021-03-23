import * as React from "react";
import Default from "../layout/default.js";
import BodyProduct from "../components/body_product.js";
import { graphql } from 'gatsby';

export const query = graphql`
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
`
// markup
const IndexPage = ({ data }) => {

  const productArray = data.allContentfulProduct.nodes
  const result = [];
  const map = new Map();
  for (const item of productArray) {
    if (!map.has(item.name)) {
      map.set(item.name, true);
      result.push(item);
    }
    console.log(result);
  }
  return (
    <Default>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <br />
            <h1>About Us</h1><br /><br />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <p>Rogers Best Burgers believes in farm to table products. We believe in giving people the experience of how things use to be. It is an experience like no others. Where you get highly styled photos of products from our competitors, we believe
                    in giving you raw ingredients the honest truth. No filters. No BS. Just an experience that your great great great grandfather had to deal with as a pioneer. </p>
          </div>
          <div className="col-sm-12 col-md-4">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Beverages</h1><br /><br />
          </div>
        </div>
        {
          result.filter((product) => product.type === "Beverages").map((product) => {
            return (
              <BodyProduct product={product} />
            )
          })
        }
        <div className="row">
          <div className="col-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Appetizers</h1><br /><br />
          </div>
        </div>
        {
          result.filter((product) => product.type === "Appetizers").map((product) => {
            return (
              <BodyProduct product={product} />
            )
          })
        }
        <div className="row">
          <div className="col-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Burgers</h1><br /><br />
          </div>
        </div>
        {
          result.filter((product) => product.type === "Burgers").map((product) => {
            return (
              <BodyProduct product={product} />
            )
          })
        }
      </div>
      <br /><br />
    </Default>
  )
}

export default IndexPage
