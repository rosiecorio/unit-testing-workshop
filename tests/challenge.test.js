import { test, expect, describe } from "vitest";

describe("adding numbers together", function () {
  test("1 plus 2", function () {
    const result = add(1, 2);
    const expected = 3;
    expect(result).toBe(expected);
  });
});

describe("Words that are palindromic", function () {
  test("madam", function () {
    const result = isPalindrome("madam");
    expect(result).toBe(true);
  });

  test("nurses run", function () {
    const result = isPalindrome("nurses run");
    expect(result).toBe(true);
  });
});

describe("Words that are NOT palindromic", function () {
  test("Tim is great", function () {
    const result = isPalindrome("Tim is great");
    expect(result).toBe(false);
  });
  test("Weeeeeee", function () {
    const result = isPalindrome("Weeeeeee");
    expect(result).toBe(false);
  });
});

describe('subtracting numbers', function () {
  test('taking numbers away', function () {
    const result = subtract(5, 2);
    expect(result).toBe(3);
  })
})

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

/*function madamPalindrome(word) {
  return word === word.split("").reverse().join("")
}

function nursesrunPalindrome(word) {
  return word === word.replaceAll('', "").split("").reverse().join("")
}*/

/*function isPalindrome(str) {
  let palCheck = str.split("").reverse().join("");
  if (palCheck == str) {
    return true
  } else {
    return false
  }
}*/

function isPalindrome(str) {
  let palCheckSpace = str.replaceAll(' ', '').split("").reverse().join("");
  let palCheck = str.replaceAll(' ', '').split("").join("");
  if (palCheckSpace === palCheck) {
    return true
  } else {
    return false
  }
}

