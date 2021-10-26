const hb = require("../../happybytes.js");

const bytes = 534589;
const negativeBytes = bytes * -1;

describe("Exported module is a JS Function", function() {
    it("checks, if the module is a valid js function", function() {
        expect(hb).toBeInstanceOf(Function);
    });
});

describe("Function Returns A String", function() {
    it("checks if the module will return a string", function() {
        expect(hb("1234")).toBeInstanceOf(String);
    });
});

describe("General Function", function() {
    it("does it return correctly", function() {
        expect(hb(bytes)).toBe('534.59kB');
    });
});

describe("SI Values", function() {
    it("what about base 10 numbers?", function() {
        expect(hb(bytes, true)).toBe("522.06KiB");
    });
});


describe("NegativeBytes", function() {
    it("negative bytes will return the correct value", function() {
        expect(hb(negativeBytes)).toBe("-534.59kB");
    });
});

describe("NullSize", function() {
    it("null as size must throw an error", function() {
        expect(function () {
            hb(null)
        }).toThrow();
    });
});