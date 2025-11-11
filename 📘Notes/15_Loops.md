<div style="background-color:#0d1117; color:#ffffff; padding:20px; border-radius:10px; font-family: 'Segoe UI', sans-serif;">

<h1 align="center">💻 JavaScript Loops</h1>

<p>
Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing a block of code as long as a specified condition is true.  
This makes code more concise and efficient.
</p>

---

## 🔁 Types of Loops in JavaScript

### 1️⃣ for Loop

The <b>for</b> loop repeats a block of code a specific number of times.  
It contains initialization, condition, and increment/decrement in one line.

**Syntax:**

```javascript
for (initialization; condition; increment / decrement) {
  // Code to execute
}
```

Example:

```js
for (let i = 1; i <= 3; i++) {
  console.log("Count:", i);
}
```

Output:

Count: 1
Count: 2
Count: 3

## 1.1️⃣ for-in Loop

The <b>for-in</b> loop iterates over the enumerable keys of an object.

Syntax:

```js
for (let key in object) {
  // code to execute
}
```

Example:

```js
const person = { name: "Alice", age: 22, city: "Delhi" };

for (let key in person) {
  console.log(key, ":", person[key]);
}
```

Output:

name : Alice
age : 22
city : Delhi

## 1.2️⃣ forEach Loop

The <b>forEach()</b> loop executes a provided function once for each element in an array.

Syntax:

```js
array.forEach(function (element, index, array) {
  // code to execute
});
```

Example:

```js
const numbers = [10, 20, 30];

numbers.forEach(function (num) {
  console.log(num);
});
```

Output:

10
20
30

## 2️⃣ while Loop

The <b>while</b> loop executes a block of code as long as the condition is true.
It acts like a repeating <i>if</i> statement.

Syntax:

```js
while (condition) {
  // Code to execute
}
```

Example:

```js
let i = 0;
while (i < 3) {
  console.log("Number:", i);
  i++;
}
```

Output:

Number: 0
Number: 1
Number: 2

## 3️⃣ do-while Loop

The <b>do-while</b> loop is similar to while loop except it runs at least once before checking the condition.
It’s an <i>exit control loop</i>.

Syntax:

```js
do {
  // Code to execute
} while (condition);
```

Example:

```js
let i = 0;
do {
  console.log("Iteration:", i);
  i++;
} while (i < 3);
```

Output:

Iteration: 0
Iteration: 1
Iteration: 2

<h3 align="center">✨ Key Points ✨</h3>

<b>for</b> → Used for a specific number of iterations.

<b>while</b> → Runs as long as condition is true.

<b>do-while</b> → Executes at least once.

<b>for-in</b> → Used for objects.

<b>forEach</b> → Used for arrays.

<h3 align="center">🧠 Made with ❤️ by Sakshi Hanwat</h3> </div>
```
