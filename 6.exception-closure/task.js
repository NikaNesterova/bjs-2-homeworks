function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }

  console.log(parseCount("123")); // Output: 123
console.log(parseCount("abc")); // Throws an error: "Невалидное значение"

console.log(validateCount("456")); // Output: 456
console.log(validateCount("def")); // Output: Error: "Невалидное значение"

