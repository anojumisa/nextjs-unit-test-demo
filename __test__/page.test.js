global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve([]), // return an empty array or mock data
	})
);

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
	it("renders Hello World text", () => {
		render(<Home />);
		expect(screen.getByText("Hello World")).toBeInTheDocument();
	});
});
