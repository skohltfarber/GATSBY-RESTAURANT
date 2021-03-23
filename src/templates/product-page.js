import React from "react";
import Default from "../layout/default.js";

export default function ProductPage({ pageContext }) {

    const { product } = pageContext;

    return (
        <Default>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Product Page</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        &nbsp;
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <img src={product.image.file.url} alt={product.name} className="hero" />
                        <br /><br />
                        <div className="row">
                            <div className="col-2 offset-1">

                                <img src={product.image.file.url} alt={product.name} className="img-thumbnail" /></div>
                            <div className="col-2"><img src={product.image.file.url} alt={product.name} className="img-thumbnail" /></div>
                            <div className="col-2"><img src={product.image.file.url} alt={product.name} className="img-thumbnail" /></div>
                            <div className="col-2"><img src={product.image.file.url} alt={product.name} className="img-thumbnail" /></div>
                            <div className="col-2"><img src={product.image.file.url} alt={product.name} className="img-thumbnail" /></div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h2>{product.name}</h2>
                        <br /> 189 rating
                            <br /> ${product.price}
                        <br /> Medium
                            <br />
                        <p class="description">{product.description.description}</p>

                        <br />
                        <a href="/cart" class="btn btn-primary">Add to Cart</a>
                    </div>

                </div>
            </div>
        </Default>
    )
}