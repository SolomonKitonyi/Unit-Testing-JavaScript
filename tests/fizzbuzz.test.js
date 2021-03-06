const lib = require("../fizzbuzz");

describe("FizzBuzz", () => {
  it("Should throw an exception if the input is not a number", () => {
    expect(() => {
      lib.fizzBuzz("a");
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz({});
    }).toThrow();
  });

  it("should return FizzBuzz if the input is divisible by 3 and five", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if the input is divisible by only 3", () => {
    const result = lib.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if the input is divisible by only 5", () => {
    const result = lib.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return input if the input is not divisible by 3 or 5", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
});
