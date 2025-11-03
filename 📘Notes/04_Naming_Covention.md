# 🧩 JavaScript Variable Naming Conventions

When naming variables in JavaScript, we must follow specific **rules and conventions**.  
Each variable name should clearly describe its purpose — making code easier to read and maintain.

For example:  
✅ Constants and global variables are generally written in **UPPERCASE**.

---

## 📜 Rules for Naming Variables

1. ❌ **Spaces are not allowed** in variable names.
2. ✅ Variable names can contain **letters, digits, underscores (\_),** and **dollar signs ($)**.
3. 🔠 Variable names are **case-sensitive**.
4. 🚫 The first character **must not** be a number or special symbol (like `#`, `@`, `-`, etc.).
5. ⚠️ **Reserved keywords** (like `class`, `return`, `function`) cannot be used as variable names.

---

## 🧪 Example 1: Invalid Starting Characters

Trying to start a variable name with `#` or `-` gives an error.

```html
<script>
  var #abc = "abc";
  console.log(#abc);
</script>

🟥 Output: SyntaxError: Invalid or unexpected token ✅ Correct way:

<script>
  var _abc = "abc";
  console.log(_abc);
</script>

🟩 Output: abc 🧪 Example 2: Spaces Are Not Allowed If you try to use spaces in
a variable name, it results in a SyntaxError.

<script>
  var a bc = "abc";
  console.log(a bc);
</script>

🟥 Output: SyntaxError: Unexpected identifier 🧪 Example 3: Case Sensitivity
Variable names are case-sensitive, meaning abc and ABC are two different
variables.

<script>
  "use strict"; // enables strict mode

  var abc = "bcd";
  var ABC = "efg";

  console.log(abc);
  console.log(ABC);
  console.log(abc == ABC);
</script>

🟩 Output: bcd efg false 🧪 Example 4: Reserved Words Not Allowed Using
JavaScript reserved keywords (like class, function, return) as variable names
causes errors.

<script>
  var class = "class";
  console.log(class);
</script>

🟥 Output: SyntaxError: Unexpected token 'class' 💡 Best Practices for Naming
Variables ✅ Use meaningful names that describe their purpose. Example:
userName, totalAmount, isLoggedIn ✅ Follow one naming convention throughout
your project. The most common one is camelCase (e.g., firstName, totalPrice).
✅Avoid single-letter names like a, b, x, unless used for small loops. ✅
Useuppercase for constants and global values. Example: const MAX_LIMIT = 100; 📚
Quick Summary | Rule | Example | Valid/Invalid | Description |
|------|----------|---------------|--------------| | Starts with letter / _ / $
| `let _data = 5;` | ✅ Valid | Variable name starts correctly | | Starts with
number | `let 9data = 5;` | ❌ Invalid | Variable name cannot start with a
number | | Contains space | `let user name = "Sakshi";` | ❌ Invalid | Variable
name cannot have spaces | | Case-sensitive | `let name`, `let Name` | ⚠️
Different | JavaScript treats both as different variables | | Reserved keyword |
`let function = 10;` | ❌ Invalid | Cannot use JS reserved words as variable
names | ✍️ Author: Sakshi Hanwat 🗓️ Part of my JavaScript Learning Journey
Repository

