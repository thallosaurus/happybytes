const hb = require("../../happybytes.js");

const bytes = 534589;
const negativeBytes = bytes * -1;

describe("General Function", function() {
    it("does it return correctly", function() {
        expect(hb(bytes)).toBe('534.59KB');
    })
})

describe("", function() {
    it("what about base 10 numbers?", function() {
        expect(hb(bytes, true)).toBe("522.06KiB");
    })
})

describe("Function Returns A String", function() {
    it("checks if the module will return a string", function() {
        expect(hb("1234")).toBeInstanceOf(String);
    })
});

describe("NegativeBytes", function() {
    it("negative bytes will return the correct value", function() {
        expect(hb(negativeBytes)).toBe("-534.59KB");
    });
});