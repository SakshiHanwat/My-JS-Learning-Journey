### 🧵 How to Concatenate Strings in JavaScript

Here are the various methods to concatenate strings in JavaScript 👇

---

### 1️⃣ Using Template Literals (Template Strings)

Template literals (introduced in **ES6**) provide a simple way to concatenate strings using `${}` syntax.

```js
let fName = "Mohit";
let lName = "Kumar";

let fullName = `${fName} ${lName}`;
console.log(fullName);
```

🟢 Output:
Mohit Kumar

---

✅ Ideal for dynamic string building.
✅ You can directly include spaces and expressions.

### 2️⃣ Using the + Operator

The + operator is the most common and easiest way to concatenate strings.

```js
let fName = "Mohit";
let lName = "Kumar";

let fullName = fName + " " + lName;
console.log(fullName);
```

🟢 Output:
Mohit Kumar

✅ Works with all variable types.
✅ Great for basic concatenations.

---

### 3️⃣ Using concat() Method

The built-in concat() method can combine multiple strings.

```js
let greet = "Hello";
let time = "Morning";

let mes = greet.concat(" ", time);
console.log(mes);
```

🟢 Output:
Hello Morning

✅ Accepts multiple strings at once.
✅ Returns a new string (does not modify original ones).

---

### 4️⃣ Using join() for Arrays

When you have an array of strings, join() merges them into a single string.

```js
let a = ["Hello", "world", "from", "JavaScript"];
let s = a.join(" ");
console.log(s);
```

🟢 Output:
Hello world from JavaScript

✅ Perfect for combining array elements.
✅ Custom separators can be added (e.g., comma, space).

---

### 5️⃣ Using reduce() and String.fromCharCode()

Useful when working with ASCII codes or when custom logic is required.

```js
let a = [72, 101, 108, 108, 111];
let greet = a.reduce((acc, code) => acc + String.fromCharCode(code), "");
console.log(greet);
```

🟢 Output:
Hello

✅ Good for advanced or dynamic transformations.
✅ Gives flexibility for special string creation.

---

### 💡 Summary

### 🧭 String Concatenation Methods in JavaScript

| Method           | Description                         | Example                   |
| ---------------- | ----------------------------------- | ------------------------- |
| Template Literal | Easy and modern way using backticks | `${fName} ${lName}`       |
| + Operator       | Traditional concatenation           | `fName + " " + lName`     |
| concat()         | Method-based joining                | `greet.concat(" ", time)` |
| join()           | Array joining                       | `arr.join(" ")`           |
| reduce()         | Custom/advanced joining             | `arr.reduce(...)`         |

🧠 Tip: For most use cases, prefer Template Literals or + Operator for readability.

---
