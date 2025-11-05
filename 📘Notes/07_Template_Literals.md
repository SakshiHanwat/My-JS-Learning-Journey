# 💡 JavaScript Template Literals

Template literals are **string literals** that allow **embedded expressions** (variables, functions, and more) in your code.  
They are enclosed by **backticks (`)** instead of single (`'`) or double (`"`) quotes.

---

## 🧠 Introduction

Introduced in **ES6**, template literals provide a more **flexible** and **readable** way to handle strings.  
They simplify embedding variables, creating **multi-line strings**, and performing **string interpolation**.

---

## ⚙️ Syntax

- **Backticks (`)** → Define a template literal
- **`${}`** → Insert expressions like variables, functions, or arithmetic operations

---

## 🧩 Basic Example

```js
let a = "GFG";
console.log(`hello ${a}`);
```

🟩 Output:
hello GFG

Explanation:

${a} inserts the value of variable a directly into the string.

Cleaner than using the + operator.

🧮 String Interpolation with Expressions
You can insert expressions (like x + y) directly inside ${}.

```js
let x = 5;
let y = 10;
console.log(`The sum of ${x} and ${y} is ${x + y}`);
```

🟩 Output:
The sum of 5 and 10 is 15

🧱 Multi-line Strings
Template literals make multi-line strings simple — no need for \n.

```js
const s = `This is a multi-line
string that spans across
several lines.`;
console.log(s);
```

🟩 Output:
This is a multi-line
string that spans across
several lines.

🧰 Tagged Template Literals
Tagged templates allow you to customize string processing.

```js
function greet(strings, name) {
  return `${strings[0]}${name.toUpperCase()}${strings[1]}`;
}

const name = "gfg";
console.log(greet`Hello, ${name}!`);
```

🟩 Output:
Hello, GFG!

🔒 Escaping Backticks and Dollar Signs
Use \ to escape backticks or $ inside template literals.

```js
const s = `This is a backtick: \` and this is a dollar sign: \$`;
console.log(s);
```

🟩 Output:
This is a backtick: ` and this is a dollar sign: $

💼 Use Cases of Template Literals
1️⃣ Multi-line Strings

```js
const poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;
console.log(poem);
```

2️⃣ Dynamic Expressions

```js
const a = 5,
  b = 10;
const result = `Sum of ${a} and ${b} is ${a + b}.`;
console.log(result);
```

3️⃣ Tagged Templates

```js
function tag(strings, ...values) {
  return strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "");
}
const output = tag`Hello, ${"Saran"}!`;
console.log(output);
```

4️⃣ HTML Templates

```js
const title = "Welcome";
const html = `<h1>${title}</h1>`;
console.log(html);
```

5️⃣ Conditionals in Templates

```js
const isAdmin = true;
const userRole = `User role: ${isAdmin ? "Admin" : "Guest"}.`;
console.log(userRole);
```

6️⃣ Loops with Templates

```js
const items = ["apple", "banana", "cherry"];
const list = `Items:${items.map((item) => `\n- ${item}`)}`;
console.log(list);
```

7️⃣ Embedding Functions

```js
const toUpper = (str) => str.toUpperCase();
const s = `Shouting: ${toUpper("hello")}`;
console.log(s);
```

---

📘 Quick Summary

| **Feature / Concept**     | **Description**                        | **Example Code Snippet**               |
| ------------------------- | -------------------------------------- | -------------------------------------- |
| **Basic Usage**           | Embed variables inside strings         | `` `Hello ${name}` ``                  |
| **Expression Evaluation** | Evaluate expressions within strings    | `` `Sum: ${x + y}` ``                  |
| **Multi-line Support**    | Create strings spanning multiple lines | `` `line1\nline2` ``                   |
| **Tagged Templates**      | Customize how strings are processed    | `` tag`Hi ${name}` ``                  |
| **Escaping Backticks**    | Include backticks or `$` safely        | `` \` and \$ ``                        |
| **HTML Templates**        | Generate HTML dynamically              | `` `<h1>${title}</h1>` ``              |
| **Conditional Rendering** | Use ternary operators for conditions   | `` `${isAdmin ? "Admin" : "Guest"}` `` |
| **Loop Integration**      | Generate lists dynamically             | `` `${arr.map(i => i)}` ``             |
| **Function Embedding**    | Call functions inside templates        | `` `${toUpper("hi")}` ``               |

✍️ Author: Sakshi Hanwat
🗓️ Part of my JavaScript Learning Journey Repository

---
