# 🌙 JavaScript - Conditional Statements

JavaScript **conditional statements** allow you to execute specific blocks of code based on given conditions.  
If a condition evaluates to **true**, one block runs; otherwise, another block executes.

---

## 🧩 Types of Conditional Statements

1. `if` statement
2. `if...else` statement
3. `if...else if...else` statement
4. `switch` statement
5. `ternary (conditional) operator`
6. `nested if...else`

---

## 🔹 1. if Statement

The `if` statement checks a condition — if it’s true, the block runs.

```javascript
let x = 20;

if (x % 2 === 0) {
  console.log("Even");
}

if (x % 2 !== 0) {
  console.log("Odd");
}
```

Output:

Even

## 🔹 2. if...else Statement

The if...else statement runs one block if the condition is true, otherwise the else block runs.

```js
let age = 25;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Not an Adult");
}
```

Output:

Adult

## 🔹 3. else if Statement

Used for multiple conditions to handle various outcomes.

```js
const x = 0;

if (x > 0) {
  console.log("Positive.");
} else if (x < 0) {
  console.log("Negative.");
} else {
  console.log("Zero.");
}
```

Output:

Zero.

## 🔹 4. switch Statement

The switch statement compares a value against multiple cases — a cleaner alternative to long if...else chains.

```js
const marks = 85;
let Branch;

switch (true) {
  case marks >= 90:
    Branch = "Computer science engineering";
    break;
  case marks >= 80:
    Branch = "Mechanical engineering";
    break;
  case marks >= 70:
    Branch = "Chemical engineering";
    break;
  case marks >= 60:
    Branch = "Electronics and communication";
    break;
  case marks >= 50:
    Branch = "Civil engineering";
    break;
  default:
    Branch = "Bio technology";
    break;
}

console.log(`Student Branch name is : ${Branch}`);
```

Output:

Student Branch name is : Mechanical engineering

## 🔹 5. Ternary Operator (?:)

A shorthand way to write simple if...else statements.

```js
let age = 21;

const result =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";

console.log(result);
```

Output:

You are eligible to vote.

## 🔹 6. Nested if...else

When conditions depend on multiple layers of logic.

```js
let weather = "sunny";
let temp = 25;

if (weather === "sunny") {
  if (temp > 30) {
    console.log("It's a hot day!");
  } else if (temp > 20) {
    console.log("It's a warm day.");
  } else {
    console.log("It's a bit cool today.");
  }
} else if (weather === "rainy") {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Check the weather forecast!");
}
```

Output:
It's a warm day.

## 🧾 Summary Table

| Conditional Statement | Description                              |
| --------------------- | ---------------------------------------- |
| `if` statement        | Runs a block if a condition is true.     |
| `else` statement      | Runs if the previous condition is false. |
| `else if`             | Tests multiple conditions.               |
| `switch`              | Compares one value against many cases.   |
| `ternary`             | Compact one-line if...else syntax.       |
| `nested if...else`    | Checks multiple hierarchical conditions. |

## 💡 Why Use Conditional Statements?

1. 🎯 Control program flow dynamically

2. 🤝 Make decisions based on inputs

3. ⚡ Enhance interactivity in web apps

4. 🧠 Handle multiple scenarios gracefully

5. 🔁 Improve flexibility in code

---

## 🛠️ Best Practices

✔️ Keep conditions simple and clear
✔️ Always use {} even for one-liners
✔️ Use === instead of ==
✔️ Prefer else if or switch for multiple conditions
✔️ Avoid deep nesting
✔️ Include default cases in switch
✔️ Comment complex logic
✔️ Test all paths thoroughly

---

## 🏁 Conclusion

Conditional statements in JavaScript make your code intelligent and dynamic.
By mastering if, else if, switch, and the ternary operator, you can write more flexible, readable, and interactive programs.

✨ Created by Sakshi Hanwat — JavaScript Notes for Learners.
