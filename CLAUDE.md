# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a JavaScript learning/testing repository focused on exploring JavaScript language features, particularly:
- Object and array destructuring
- Array iteration methods (for...in vs for...of vs traditional loops)
- Object enumeration and property handling

## Repository Structure

The repository contains standalone JavaScript files that can be run directly with Node.js. Each file demonstrates a specific JavaScript concept:

- **JS_Test_1.js**: Object destructuring examples
- **JS_For_In.js**: Demonstrates proper array iteration patterns (for...of with entries() vs traditional for loops)
- **JS_Object_Enum_Test.js**: Explores for...in enumeration with arrays that have custom properties

## Running Code

Execute any JavaScript file directly:
```bash
node <filename>.js
```

Example:
```bash
node JS_Test_1.js
node JS_For_In.js
```

## Code Patterns

This repository demonstrates JavaScript best practices:
- Prefer `for...of` with `.entries()` over `for...in` for array iteration
- Use const for values that won't be reassigned within loop bodies
- Destructuring syntax for cleaner variable extraction
