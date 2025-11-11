# ⚡ JavaScript Ternary Operator

The **Ternary Operator** in JavaScript is a **conditional operator** that evaluates a condition and returns one of two values based on whether the condition is **true** or **false**.  
It simplifies decision-making and makes your code **shorter and more readable**.

---

## 🧠 Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse
```
Explanation

condition → Expression that evaluates to true or false

expressionIfTrue → Executes if condition is true

expressionIfFalse → Executes if condition is false

## 🧩 Example 1: Basic Ternary Operator
```js
// JavaScript to illustrate Conditional operator
let PMarks = 50;
let res = (PMarks > 39) ? "Pass" : "Fail";

console.log(res);
```

Output:

Pass

Explanation

PMarks = 50

Condition (PMarks > 39) is true

Returns "Pass" and stores it in res

Prints Pass on the console

## 🌿 Example 2: Nested Ternary Operators

The ternary operator can be nested to handle multiple conditions compactly.
```js
let day = 3;
let greeting = (day === 1) ? 'Start of the week' :
               (day === 2) ? 'Second day' :
               (day === 3) ? 'Midweek' :
               (day === 4) ? 'Almost weekend' :
               'Weekend';

console.log(greeting);
```

Output:

Midweek

Explanation

If day is 1 → "Start of the week"

If day is 2 → "Second day"

If day is 3 → "Midweek"

Else → "Weekend"

## ⚙️ Example 3: Ternary Operator Inside Functions

The ternary operator makes functions concise by replacing long if...else blocks.
```js
function checkAge(age) {
  return (age >= 18) ? 'Adult' : 'Minor';
}

console.log(checkAge(20));  
console.log(checkAge(15));
```

Output:

Adult
Minor

Explanation

If age >= 18 → returns "Adult"

Otherwise → returns "Minor"

## 🔁 Example 4: Using Ternary Operator with Function Calls

You can use the ternary operator to decide which function to call based on a condition.
```js
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

let isLeaving = true;
let name = 'Geeks';

isLeaving ? sayGoodbye(name) : sayHello(name);
```

Output:

Goodbye, Geeks!

Explanation

isLeaving = true

Since the condition is true → sayGoodbye(name) runs

## ⚖️ Ternary Operator vs if...else
🧩 Using if...else
```js
let hour = 15;
let message;

if (hour < 12) {
  message = 'Good morning';
} else {
  message = 'Good afternoon';
}

console.log(message);
```

Output:

Good afternoon

⚡ Using Ternary Operator
```js
let hour = 15;
let message = (hour < 12) ? 'Good morning' : 'Good afternoon';

console.log(message);
```

Output:

Good afternoon

---

## 📘 Summary Table
| Concept        | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| **Definition** | A shorthand conditional operator (`? :`) that returns one of two expressions. |
| **Syntax**     | `condition ? trueExpression : falseExpression`                                |
| **Use Case**   | Best for short, simple condition checks.                                      |
| **Nested Use** | Allows multiple chained conditions.                                           |
| **Replaces**   | Simple `if...else` statements.                                                |

---
## 💡 Best Practices

✅ Use ternary operators for simple decisions
✅ Avoid nesting too deeply — it reduces readability
✅ Prefer if...else for complex logic
✅ Always format nested ternaries clearly
✅ Keep your expressions short and meaningful

## 🏁 Conclusion

The Ternary Operator is a concise way to handle conditional logic in JavaScript.
It’s ideal for quick checks, inline value assignments, and improving code readability.
Use it wisely — keep it simple, clear, and readable.

✨ Created by Sakshi Hanwat
 — JavaScript Learning Notes

---