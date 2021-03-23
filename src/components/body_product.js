import React from "react";
import { Link } from "gatsby";

function BodyProduct({ product }) {
	return (
		<>
			<div className="row">
				<div className="col-12">&nbsp;</div>
			</div>
			<div className="row row-cols-sm-1 row-cols-md-2">
				<div className="col-sm-12 col-md-4 col-lg-3">
					<h3>{product.name}</h3>
					<img src={product.image.file.url} alt={product.name} />
				</div>
				<div className="col-sm-12 col-md-8 col-lg-9">
					<p> {product.description.description}</p>
					<Link to={"/products/" + product.id} className="btn btn-primary">Learn More</Link>
				</div>
			</div>
		</>
	)
};


export default BodyProduct;