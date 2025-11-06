# 🧠 JavaScript Type Conversion — Quick Revision Notes

In JavaScript, **Type Conversion** means changing the data type of a variable from one type to another.  
This can happen **automatically (Implicit Conversion / Coercion)** or **manually (Explicit Conversion)**.

---

## 🔹 Implicit Type Conversion (Type Coercion)

**Definition:**  
Automatic conversion of data types by JavaScript when performing operations.

### 🧩 String + Number (Concatenation)

```js
let res = 5 + "5";
console.log(res); // "55"
```

➡️ Number converted to string, then concatenated.

## 🧩 Boolean to Number

```js
let res = true + 1;
console.log(res); // 2
```

➡️ true → 1, false → 0.

## 🧩 Equality Comparison (==)

```js
let res = 5 == "5";
console.log(res); // true
```

## 🧩 Logical Operations

Falsy values: undefined, null, "", false, NaN, 0
Truthy values: All others.

```js
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
```

---

## 🔹 Explicit Type Conversion

Definition:
Manual conversion of data types using built-in functions.

## 🔸 Converting to String

```js
let n = 123;
console.log(String(n)); // "123"
console.log(n.toString()); // "123"
```

## 🔸 Converting to Number

```js
let s = "123";
console.log(Number(s)); // 123
console.log(parseFloat("12.34")); // 12.34
```

## 🔸 Converting to Boolean

```js
let str = "Hello";
let emptyStr = "";
console.log(Boolean(str)); // true
console.log(Boolean(emptyStr)); // false
```

---

## 🧮 Comparison Summary

| **Conversion Type**  | **Implicit (Coercion)**                     | **Explicit Conversion**                         |
| -------------------- | ------------------------------------------- | ----------------------------------------------- |
| **String + Number**  | Automatically converts number → string      | Use `String()` or `.toString()`                 |
| **Number + Boolean** | Converts `true → 1` and `false → 0`         | Use `Number()`                                  |
| **String → Boolean** | Non-empty strings → `true`, empty → `false` | Use `Boolean()`                                 |
| **String → Number**  | Implicit coercion using `+` operator        | Use `Number()`, `parseInt()`, or `parseFloat()` |

---

## 💡 Why Learn Type Conversion?

Data Handling: Required when processing user input or API data.

Prevent Bugs: Avoids unexpected results from automatic coercion.

## Code Clarity: Explicit conversions make code clean and predictable.

## 🧭 Tip:

Always prefer explicit conversion for cleaner, bug-free JavaScript code.

👩‍💻 Made by Sakshi Hanwat — JavaScript Notes Series

---
