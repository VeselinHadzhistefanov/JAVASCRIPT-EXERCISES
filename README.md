# JavaScript Examples

A collection of JavaScript examples demonstrating core language features and best practices.

## Overview

This repository contains standalone JavaScript files that explore fundamental JavaScript concepts, including destructuring, iteration patterns, and object enumeration.

## Examples

### JS_Test_1.js - Object Destructuring

Demonstrates how to extract properties from objects using destructuring syntax:

```javascript
let obj = { num: 1, str: "bar" }
let {num, str} = obj;
```

**Key Concepts:**
- Object destructuring assignment
- Extracting multiple properties in a single statement

**Run:**
```bash
node JS_Test_1.js
```

### JS_For_In.js - Array Iteration Patterns

Compares different approaches to iterating over arrays with index and value access:

```javascript
// Preferred: for...of with entries()
for (const [index, value] of arr.entries()) {
    console.log(`Index: ${index}, Value: ${value}`);
}

// Alternative: traditional for loop
for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    console.log(`Index: ${i}, Value: ${value}`);
}
```

**Key Concepts:**
- `for...of` loop with `.entries()` method
- Array destructuring in loop variables
- Traditional indexed iteration as an alternative

**Run:**
```bash
node JS_For_In.js
```

### JS_Object_Enum_Test.js - For...In with Arrays

Explores how `for...in` behaves when arrays have custom properties:

```javascript
let arr = [10, 20, 30]
arr.label = "numbers"
arr.description = "An array of numbers"
arr.model = {type: "numeric", default: 0}

for (let key in arr) {
    // Iterates over indices AND custom properties
}
```

**Key Concepts:**
- Arrays as objects with enumerable properties
- Why `for...in` is not recommended for array iteration
- Understanding JavaScript's prototype chain and enumeration

**Run:**
```bash
node JS_Object_Enum_Test.js
```

## Prerequisites

- Node.js installed on your system

## Running the Examples

Each file can be executed independently:

```bash
node <filename>.js
```

## Learning Path

1. Start with **JS_Test_1.js** to understand destructuring
2. Move to **JS_For_In.js** to learn proper array iteration
3. Explore **JS_Object_Enum_Test.js** to understand why `for...in` should be avoided for arrays