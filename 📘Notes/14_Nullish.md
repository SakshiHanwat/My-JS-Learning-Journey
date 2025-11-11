## ⚙️ JavaScript Nullish Coalescing (`??`) Operator

The **Nullish Coalescing (`??`) Operator** in JavaScript is a **logical operator** that returns the **right-hand operand** when the **left-hand operand** is `null` or `undefined`.  
Otherwise, it returns the **left-hand operand** itself.

It’s mainly used to **set default values** for variables when a value might be missing or not defined.

---

## 🧠 Syntax

```javascript
variable ?? default_value;
```

variable → Expression or variable to check

default_value → Value returned if the variable is null or undefined

## 🔹 Example 1: Basic Function Using Nullish Coalescing Operator

```js
function foo(bar) {
  bar = bar ?? 55;
  console.log(bar);
}

foo(); // 55
foo(22); // 22
```

Output:

55
22

🧩 Explanation:

When foo() is called without an argument, bar is undefined, so bar ?? 55 returns 55.

When foo(22) is called, bar already has a value (22), so it returns 22.

## 🔹 Example 2: Using ?? with JSON Objects

A common use case is providing default values when accessing object properties that might be missing.

```js
const foo = {
  bar: 0,
};

const valueBar = foo.bar ?? 42;
const valueBaz = foo.baz ?? 42;

// Value of bar: 0
console.log("Value of bar: ", valueBar);

// Value of baz: 42
console.log("Value of baz: ", valueBaz);
```

Output:

Value of bar: 0
Value of baz: 42

💡 Explanation:

foo.bar exists and has the value 0, so it returns 0 (not null or undefined).

## foo.baz is undefined, so it returns the default value 42.

## ⚖️ Comparison with || (Logical OR Operator)

| Operator | Returns Right Operand If               | Example    | Result                                                     |     |     |      |       |
| -------- | -------------------------------------- | ---------- | ---------------------------------------------------------- | --- | --- | ---- | ----- |
| `        |                                        | `          | Left value is _falsy_ (false, 0, "", null, undefined, NaN) | `0  |     | 100` | `100` |
| `??`     | Left value is _null or undefined only_ | `0 ?? 100` | `0`                                                        |     |     |      |       |

✅ Use ?? when you only want to check for null or undefined,
not for other falsy values like 0 or ''.

## 🌐 Supported Browsers

✅ Google Chrome
✅ Edge
✅ Firefox
✅ Opera
✅ Safari

## 💡 Key Takeaways

Returns right-hand value only if left-hand value is null or undefined.

Helps set default values cleanly.

More precise than || (doesn’t treat 0, false, or '' as empty).

## Works well in functions, objects, and default parameter logic.

## 🧾 Summary Table

| Concept                   | Description                     |        |                                                |
| ------------------------- | ------------------------------- | ------ | ---------------------------------------------- |
| **Operator**              | `??` (Nullish Coalescing)       |        |                                                |
| **Checks for**            | `null` or `undefined`           |        |                                                |
| **Purpose**               | Provide default values          |        |                                                |
| **Common Use Case**       | JSON parsing, function defaults |        |                                                |
| \*\*Difference from OR (` |                                 | `)\*\* | Doesn’t consider falsy values like `0` or `''` |

## 🏁 Conclusion

The Nullish Coalescing Operator (??) simplifies handling of missing or undefined values in JavaScript.
It’s a powerful tool for writing cleaner, safer, and more predictable code—especially when dealing with optional data or API responses.

✨ Created by Sakshi Hanwat
— JavaScript Learning Notes
