import { helloWorld } from "../src/index";

describe("helloWorld", () => {
	it("returns the string 'Hello, World!'", () => {
		expect(helloWorld()).toEqual("Hello, World!");
	});
});