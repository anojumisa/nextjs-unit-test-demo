import React from "react";

function ProductCard({ title, description, price}) {
	return <div className="border p-2 mb-2">
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
    </div>;
}

export default ProductCard;
