/** @type {import('jest').Config} */
const config = {
	verbose: true,
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/jest.setup.js"],
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		"\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
	},
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
};

module.exports = config;
