# 🧠 ReadlineSync & Type Conversion in JavaScript

In this article, we’ll explore **type conversion** in JavaScript with a real-life example — extracting and converting **user input** from the terminal using the **readline-sync** package.  
Type conversion is essential when dealing with user data, as inputs are usually strings even when users enter numbers.

---

## 💡 Why Type Conversion is Important

When taking data from an input field or terminal, it is usually in the form of a **string**, even if the user enters a number.  
To perform numeric operations, you must convert these strings to numbers.

**Example:**

```js
const num = "25";
console.log(typeof num); // string
console.log(Number(num)); // 25
console.log(typeof Number(num)); // number
```

## ⚙️ Installing Necessary Packages

Before we dive into the code, ensure you have Node.js installed on your system.
Node.js comes with npm (Node Package Manager), which is used to install packages.

🪄 Steps:

1.Install Node.js:
Download and install from the official Node.js website
.

2.Install readline-sync Package:
This package allows us to read user input from the terminal.

```js
npm install readline-sync
```

## 🧩 Getting User Input

Let's create a simple script to get user data and convert it to the appropriate type.

1️⃣ Set Up readline-sync

```js
const readlineSync = require("readline-sync");
```

2️⃣ Ask for User Input
const userName = readlineSync.question('May I know your name? ');

```js
console.log(`Welcome, ${userName}!`);
```

3️⃣ Convert and Use Numeric Input

Now, let’s ask the user for their age and calculate their birth year.

```js
const userAge = readlineSync.question("May I know your age? ");

// Convert the input to a number
const userAgeNumber = Number(userAge);

// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - userAgeNumber;
  console.log(`You were born in the year ${birthYear}.`);
} else {
  console.log("Please enter a valid number for age.");
}
```

---

## 🧠 Detailed Explanation

| **Concept**                     | **Explanation**                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Asking for Input**            | The `readlineSync.question()` method prompts the user and captures their input as a string.                   |
| **Converting String to Number** | The `Number()` function converts string input into a number. Invalid conversions return `NaN` (Not-a-Number). |
| **Checking Conversion**         | The `isNaN()` function checks if the conversion was successful or not.                                        |

---

## 🧾 Full Example Code

```js
const readlineSync = require("readline-sync");

// Get user's name
const userName = readlineSync.question("May I know your name? ");
console.log(`Welcome, ${userName}!`);

// Get user's age
const userAge = readlineSync.question("May I know your age? ");

// Convert the input to a number
const userAgeNumber = Number(userAge);

// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - userAgeNumber;
  console.log(`You were born in the year ${birthYear}.`);
} else {
  console.log("Please enter a valid number for age.");
}
```

---

## 🖥️ Running the Code

1. Open your terminal.

2. Navigate to the directory containing your .js file.

3. Run the file using Node.js:

```js
node your-script-file.js
```

Replace your-script-file.js with your actual file name.

---

## 📋 Key Points

| **Concept**         | **Summary**                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| **Type Conversion** | Converting data from one type to another is crucial for performing operations. |
| **User Input**      | `readline-sync` helps you capture user input from the terminal.                |
| **Error Handling**  | Always validate input using `isNaN()` to ensure correctness.                   |
| **Output Example**  | `Welcome, Sakshi!`<br>`You were born in the year 2003.`                        |

---
