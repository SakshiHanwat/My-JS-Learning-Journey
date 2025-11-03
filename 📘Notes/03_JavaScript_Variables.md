# 🧠 JavaScript Variables

Variables in JavaScript can be declared using **`var`**, **`let`**, or **`const`**.  
JavaScript is **dynamically typed**, meaning variable types are determined at runtime (no need to specify type explicitly).

---

## 📝 Example

```js
// Old style
var a = 10;

// Preferred for non-const values
let b = 20;

// Preferred for constants (cannot be reassigned)
const c = 30;

console.log(a);
console.log(b);
console.log(c);

✅ Output
10
20
30


📘 Declaring Variables in JavaScript
🔹 Before ES6 (2015)


Only var existed.


It was function-scoped and global-scoped, which caused issues like hoisting and global pollution.


🔹 After ES6


let and const were introduced.


Both are block-scoped, meaning they exist only inside { } blocks.



1️⃣ var Keyword
var is function-scoped and hoisted, meaning it can be redeclared and used before initialization (can cause bugs).
var a = "Hello Geeks";
var b = 10;
console.log(a);
console.log(b);


2️⃣ let Keyword
let is block-scoped and not hoisted.
Use this for variables that may change their value.
let a = 12;
let b = "GFG";
console.log(a);
console.log(b);


3️⃣ const Keyword
const is block-scoped and immutable — you cannot reassign it.
However, if it holds an object or array, their internal values can be modified.
const a = 5;
let b = "GFG";
console.log(a);
console.log(b);


🧩 Rules for Naming Variables
Must begin with a letter, underscore (_), or dollar sign ($).

Can contain letters, digits, underscores, or dollar signs after the first character.

Case-sensitive — age and Age are different.

Cannot use reserved keywords like class, return, function, etc.


let userName = "Suman";  // ✅ Valid
let $price = 100;        // ✅ Valid
let _temp = 0;           // ✅ Valid
let 123name = "Ajay";    // ❌ Invalid
let function = "GFG";    // ❌ Invalid


💡 Interesting Facts About Variables
1️⃣ let and const are preferred over var
Introduced in ES6 to avoid scoping problems with var.

2️⃣ var is Function Scoped
Accessible outside the block if within the same function.
if (true) {
  var x = 10;
}
console.log(x); // ✅ Works (function scoped)

🟩 Output
10


3️⃣ let and const are Block Scoped
Cannot be accessed outside their block.
if (true) {
  let y = 20;
  const z = 30;
}
console.log(y, z); // ❌ ReferenceError

🟥 Output
ReferenceError


4️⃣ Redeclaration Rules
var can be redeclared, but let and const cannot.
var x = 10;
var x = 20; // ✅ Allowed

let y = 30;
let y = 40; // ❌ SyntaxError

const z = 50;
const z = 60; // ❌ SyntaxError

🟥 Output
SyntaxError: Identifier 'y' has already been declared


5️⃣ Mutability of const Objects and Arrays
Even if declared with const, object properties and array elements can be changed,
but reassignment is not allowed.
const obj = { a: 10 };
obj.a = 20; // ✅ Allowed

const arr = [10, 20, 30];
arr[2] = 40; // ✅ Allowed
console.log(arr);

// ❌ Not allowed:
// obj = { b: 30 };
// arr = [50, 100];

🟩 Output
[10, 20, 40]


📚 Recommended Reads

Variable Scope in JavaScript
Variable Shadowing in JavaScript
var vs let vs const

✍️ Author: Sakshi Hanwat
🗓️ Part of my JavaScript Learning Journey Repository

```
