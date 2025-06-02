Workflow
1. Install all dependencies:

```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom babel-jest @babel/preset-env @babel/preset-react identity-obj-proxy
```
2. Create/Update config files:
- jest.config.js
```
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

```
- babel.config.js
```
module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
};

```
- .watchmanconfig (optional, for warnings)
```
{}
```
- jest.setup.js (for global mocks)
```
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve([]),
	})
);

```
3. Update all component files to import React if using JSX.
4. Add a test script to package.json:

```
"scripts": {
  "test": "jest"
}
```
5. create a folder called `__test__` and contain your unit tests in all test pages here. Rename the file with xxx.test.js
![alt text](/next-fundamental/public/Screenshot%202025-05-30%20at%2021.22.53.png)
