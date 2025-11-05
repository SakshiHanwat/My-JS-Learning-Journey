## ⚙️ JavaScript Arithmetic Operators

JavaScript Arithmetic Operators are operators that perform mathematical operations on numerical values and return a result.

---

## ➕ Addition (`+`) Operator

The addition operator adds two numbers or concatenates strings.

```js
// Number + Number => Addition
let x = 1 + 2;
console.log(x);

// Number + String => Concatenation
let y = 5 + "hello";
console.log(y);
```

## ➖ Subtraction (-) Operator

Gives the difference between two operands.

```js
// Number - Number => Subtraction
let x = 10 - 7;
console.log(x);

let y = "Hello" - 1;
console.log(y);
```

Output

3
NaN

## ✖️ Multiplication (\*) Operator

Gives the product of operands.

```js
let x = 3 * 3;
let y = -4 * 4;
console.log(x);
console.log(y);

let a = Infinity * 0;
let b = Infinity * Infinity;
console.log(a);
console.log(b);

let z = "hi" * 2;
console.log(z);
```

Output

9
-16
NaN
Infinity
NaN

## ➗ Division (/) Operator

Provides the quotient of its operands.

```js
let x = 5 / 2;
let y = 1.0 / 2.0;
console.log(x);
console.log(y);

let a = 3.0 / 0;
let b = 4.0 / 0.0;
console.log(a);
console.log(b);

let z = 2.0 / -0.0;
console.log(z);
```

Output

2.5
0.5
Infinity
Infinity
-Infinity

## 🔢 Modulus (%) Operator

Returns the remainder of division.

```js
let x = 9 % 5;
let y = -12 % 5;
let z = 1 % -2;
let a = 5.5 % 2;
let b = -4 % 2;
let c = NaN % 2;

console.log(x, y, z, a, b, c);
```

Output

4
-2
1
1.5
-0
NaN

## ⚡ Exponentiation (\*\*) Operator

Raises the base to the power of the exponent.

```js
// let x = -4 ** 2 // Incorrect
let y = -(4 ** 2);
let z = 2 ** 5;
let a = 3 ** 3;
let b = 3 ** 2.5;
let c = 10 ** -2;
let d = 2 ** (3 ** 2);
let e = NaN ** 2;

console.log(y, z, a, b, c, d, e);
```

Output

-16
32
27
15.588457268119896
0.01
512
NaN

## 🔼 Increment (++) Operator

Increases the operand by 1.

```js
// Postfix
let a = 2;
b = a++; // b = 2, a = 3

// Prefix
let x = 5;
y = ++x; // x = 6, y = 6

console.log(a, b, x, y);
```

Output

3
2
6
6

## 🔽 Decrement (--) Operator

Decreases the operand by 1.

```js
// Prefix
let a = 2;
b = --a;

// Postfix
let x = 3;
y = x--;

console.log(a, b, x, y);
```

Output

1
1
2
3

## ➖ Unary Negation (-) Operator

Negates or converts a value to a number and changes its sign.

```js
let a = 3;
b = -a;

let x = "3";
y = -x;

console.log(a, b, x, y);
```

Output

3
-3
3
-3

## ➕ Unary Plus (+) Operator

Converts non-numbers into numbers.

```js
let a = +4;
let b = +"2";
let c = +true;
let x = +false;
let y = +null;

console.log(a, b, c, x, y);
```

Output

4
2
1
0
0

---

## 🧭 Summary Table

| Operator | Description               | Example                                 |
| -------- | ------------------------- | --------------------------------------- |
| +        | Addition or concatenation | `5 + 5 → 10` / `"Hi " + "JS" → "Hi JS"` |
| -        | Subtraction               | `10 - 4 → 6`                            |
| \*       | Multiplication            | `3 * 3 → 9`                             |
| /        | Division                  | `5 / 2 → 2.5`                           |
| %        | Modulus (Remainder)       | `9 % 5 → 4`                             |
| \*\*     | Exponentiation            | `2 ** 3 → 8`                            |
| ++       | Increment                 | `x++ → x + 1`                           |
| --       | Decrement                 | `x-- → x - 1`                           |
| -        | Unary Negation            | `-5 → -5`                               |
| +        | Unary Plus                | `+"5" → 5`                              |

---

## 📘 Note:

For everyday arithmetic, use the standard operators (+, -, \*, /, %).
For advanced math, JavaScript also provides the built-in Math object (like Math.pow(), Math.sqrt()).

---
