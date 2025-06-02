"use client";
import React from "react";
import { useEffect, useState } from "react";
import Button from "./komponen/Button";
import Navbar from "./komponen/Navbar";
import ProductCard from "./komponen/ProductCard";

export default function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const res = await fetch("https://api.escuelajs.co/api/v1/products");
			const data = await res.json();
			setProducts(data);
		}
		fetchProducts();
	}, []);
	console.log("products", products);

	return (
		<div>
			<Navbar />
			<p>Hello World</p>
			<Button />

			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}

// 1. Function in JS
// 2. Arrow Function in JS
// () => {}
// () => ()
// 3. default functions in js (map(), fetch, json(), etc.)
// 4. (), {}, []
// () : parameter
// {} : function
// [] : array/data
