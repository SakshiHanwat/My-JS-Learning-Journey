# 🧠 JavaScript Data Types

JavaScript **data types** determine the kind of data a variable can hold and how it behaves when processed.  
Each data type has its own characteristics and affects how values are stored, accessed, and manipulated.

---

## 🔹 Categories of Data Types in JavaScript

JavaScript data types are broadly divided into:

1. **Primitive Data Types**
2. **Non-Primitive (Reference) Data Types**

---

## 🧮 1. Primitive Data Types

Primitive data types are **simple, immutable values** stored directly in memory.

### 📘 a. Number

Represents both integers and floating-point numbers.  
Special values include `Infinity`, `-Infinity`, and `NaN`.

```js
let n1 = 2;
console.log(n1);

let n2 = 1.3;
console.log(n2);

let n3 = Infinity;
console.log(n3);

let n4 = 'something here too' / 2;
console.log(n4);
```
🟥 Output:

2
1.3
Infinity
NaN

### 📘 b. String

A sequence of characters enclosed in quotes.
JavaScript supports "double", 'single', and backticks (`) for template literals.

```js
let s1 = "Hello There";
console.log(s1);

let s2 = 'Single quotes work fine';
console.log(s2);

let s3 = `can embed ${s1}`;
console.log(s3);
```

📘 Output:

Hello There
Single quotes work fine
can embed Hello There


🧩 Backticks allow embedding variables inside strings.

### 📘 c. Boolean

Represents logical values: true or false.

```js
let b1 = true;
let b2 = false;

console.log(b1);
console.log(b2);
```

Output:

true
false

### 📘 d. Null

Represents the intentional absence of any value.

```js
let age = null;
console.log(age);
```

Output:

null

### 📘 e. Undefined

A variable that has been declared but not assigned a value is undefined.

```js
let a;
console.log(a);
```

Output:

undefined

### 📘 f. Symbol (ES6)

Symbols are unique and immutable identifiers used for object properties.

```js
let s1 = Symbol("Geeks");
let s2 = Symbol("Geeks");
console.log(s1 == s2);
```

Output:

false

### 📘 g. BigInt (ES2020)

Used for representing very large integers beyond Number.MAX_SAFE_INTEGER.

```js
let big = BigInt("0b1010101001010101001111111111111111");
console.log(big);
```

### 🧱 2. Non-Primitive Data Types

These data types are derived from primitives and are mutable (can change after creation).

### 🧩 a. Object

Stores data in key-value pairs.

```js
let gfg = {
  type: "Company",
  location: "Noida"
};

console.log(gfg.type);
```

Output:

Company

### 🧩 b. Array

An ordered collection of values, which can include mixed data types.

```js
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);
```

Output:

[ 1, 2, 3, 4, 5 ]
[ 1, 'two', { name: 'Object' }, [ 3, 4, 5 ] ]

### 🧩 c. Function

Reusable block of code designed to perform a specific task.

```js
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Ajay"));
```

Output:

Hello, Ajay!

### 🧩 d. Date Object

Used for working with dates and times.
```js
let currentDate = new Date();
console.log(currentDate);
```

Output (example):

2025-03-08T06:23:33.202Z

### 🧩 e. Regular Expression (RegExp)

Used to define patterns for matching text in strings.
```js
let pattern = /hello/;
let result = pattern.test("Hello, world!");
console.log(result);
```

Output:

false

### 💭 Interesting Facts about JavaScript Data Types
### 1️⃣ Dynamically Typed

JavaScript doesn’t bind variables to specific data types.
The type is determined at runtime.
```js
let x = 42;
console.log(x);

x = "hello";
console.log(x);

x = [1, 2, 3];
console.log(x);
```

Output:

42
hello
[1, 2, 3]

### 2️⃣ Everything is (almost) an Object

Functions, arrays, and even primitives behave like objects temporarily.
```js
let s = "hello";
console.log(s.length);

let x = 42;
console.log(x.toString());

let y = true;
console.log(y.toString());
```

Output:

5
42
true

### 3️⃣ NaN is Not Equal to Itself

NaN means “Not-a-Number” and is of type number.
```js
console.log(typeof NaN);
console.log(NaN === NaN);
```

Output:

number
false

### 4️⃣ Symbols Are Always Unique

Even if created with the same description, Symbols are never equal.
```js
let s1 = Symbol("abc");
let s2 = Symbol("abc");
console.log(s1 === s2);
```

Output:

false

### 5️⃣ Undefined vs Null

undefined → Variable declared but not assigned.

null → Assigned explicitly to mean “no value”.

### 6️⃣ Integers and Floats Are Both Numbers
```js
let x = 42;
let y = 42.5;

console.log(typeof x);
console.log(typeof y);
```

Output:

number
number

### 7️⃣ A Character is Also a String

There’s no separate type for characters in JavaScript.
```js
let s1 = "gfg";
let s2 = 'g';

console.log(typeof s1);
console.log(typeof s2);
```

Output:

string
string

## 🧭 Summary Table

| 🗂️ **Category** | 🧩 **Type** | 💡 **Example** |
|:----------------:|:------------|:-----------------------------|
| Primitive | Number | `let x = 10;` |
| Primitive | String | `"Hello"` |
| Primitive | Boolean | `true` |
| Primitive | Null | `null` |
| Primitive | Undefined | `let a;` |
| Primitive | Symbol | `Symbol("id")` |
| Primitive | BigInt | `12345678901234567890n` |
| Non-Primitive | Object | `{ name: "Sakshi" }` |
| Non-Primitive | Array | `[1, 2, 3]` |
| Non-Primitive | Function | `function greet(){}` |

✍️ Author: Sakshi Hanwat
🗓️ Part of my JavaScript Learning Journey Repository


---