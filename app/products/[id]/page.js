import ProductCard from "@/app/komponen/ProductCard";

export default async function ProductPage({ params }) {
	const res = await fetch(
		`https://api.escuelajs.co/api/v1/products/${params.id}`
	);
	const product = await res.json();
	console.log("product", product);

	return <ProductCard {...product} />;
}
    