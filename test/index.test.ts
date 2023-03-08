import { helloWorld } from "../src/index.js";

describe("helloWorld", () => {
	it("returns the string 'Hello, World!'", () => {
		expect(helloWorld()).toEqual("Hello, World!");
	});
});