import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<div className="p-2 gap-4">
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
		</div>
	);
}

export default Navbar;
