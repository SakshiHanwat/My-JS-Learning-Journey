# 🧮 JavaScript Comparison Operators

## 📘 Overview

JavaScript comparison operators are essential tools for **checking conditions** and **making decisions** in your code.  
They allow developers to compare values, check equality, and determine relational conditions between operands.

---

## ⚙️ List of Comparison Operators

| Operator | Name                       | Usage     | Description                                                              |
| -------- | -------------------------- | --------- | ------------------------------------------------------------------------ |
| `==`     | Equality Operator          | `a == b`  | Compares equality of two operands (performs type conversion if needed)   |
| `!=`     | Inequality Operator        | `a != b`  | Compares inequality of two operands (performs type conversion if needed) |
| `===`    | Strict Equality Operator   | `a === b` | Compares both value **and** type                                         |
| `!==`    | Strict Inequality Operator | `a !== b` | Compares inequality **with** type                                        |
| `>`      | Greater Than               | `a > b`   | Checks if left operand is greater than right operand                     |
| `>=`     | Greater Than or Equal      | `a >= b`  | Checks if left operand is greater than or equal to right operand         |
| `<`      | Less Than                  | `a < b`   | Checks if left operand is smaller than right operand                     |
| `<=`     | Less Than or Equal         | `a <= b`  | Checks if left operand is smaller than or equal to right operand         |

---

## 🔍 Examples & Outputs

### 1️⃣ Equality Operator (==)

```javascript
let x = 5;
let y = "5";

console.log(x == 5); // true
console.log(y == 5); // true
console.log(x == y); // true

console.log(NaN == NaN); // false
console.log(0 == false); // true
console.log(0 == null); // false
```

## 2️⃣ Inequality Operator (!=)

```js
let x = 5;
let y = "5";

console.log(x != 6); // true
console.log(y != "5"); // false
console.log(x != y); // false

console.log(0 != false); // false
console.log(0 != null); // true
console.log(NaN != NaN); // true
```

## 3️⃣ Strict Equality Operator (===)

```js
let x = 5;
let y = "5";

console.log(x === 6); // false
console.log(y === "5"); // true
console.log(x === y); // false

console.log(NaN === NaN); // false
console.log(0 === false); // false
console.log(0 === null); // false
```

## 4️⃣ Strict Inequality Operator (!==)

```js
let x = 5;
let y = "5";

console.log(x !== 6); // true
console.log(y !== "5"); // false
console.log(x !== y); // true

console.log(0 !== false); // true
console.log(0 !== null); // true
console.log(NaN !== NaN); // true
```

## 5️⃣ Greater Than Operator (>)

```js
let x = 5;
let y = "5";

console.log(x > 0); // true
console.log(y > "10"); // true
console.log(x > "10"); // false
console.log(y > 0); // true
```

## 6️⃣ Greater Than or Equal Operator (>=)

```js
let x = 5;
let y = "5";

console.log(x >= 5); // true
console.log(y >= "15"); // true
console.log(x >= "5"); // true
console.log(y >= 15); // false
```

## 7️⃣ Less Than Operator (<)

```js
let x = 5;
let y = "5";

console.log(x < 15); // true
console.log(y < "0"); // false
console.log(x < "0"); // false
console.log(y < 15); // true
```

## 8️⃣ Less Than or Equal Operator (<=)

```js
let val1 = 5;
let val2 = "5";

console.log(val1 <= 15); // true
console.log(val2 <= "0"); // false
console.log(val1 <= "0"); // false
console.log(val2 <= 15); // true
```

---

## 🗣️ Discussion

These operators are widely used in:

Conditional statements (if, else if, switch)

Loops (for, while)

Logical decision-making

Type checking and debugging

## 💡 Notes

== and != perform type coercion, meaning they convert types before comparison.

=== and !== do not perform type coercion.

NaN is never equal to itself.

Be cautious when comparing null, undefined, and false — results may be unexpected.

## 📂 Author

Created by: Sakshi Hanwat
Language: JavaScript
Purpose: Educational / Practice Project

---

## 🏁 Conclusion

JavaScript comparison operators are the foundation of conditional logic.
Understanding their subtle differences — especially between == vs === — helps you write cleaner and bug-free code.

---
