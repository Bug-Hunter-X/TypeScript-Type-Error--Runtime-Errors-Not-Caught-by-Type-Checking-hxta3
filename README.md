This repository demonstrates a common issue in TypeScript where type errors are not caught during compilation but only at runtime.

The `bug.ts` file contains a function `add` that is defined to accept two numbers. However, the function is called with a string and a number, which results in a runtime error.

The `bugSolution.ts` file provides a solution that uses type guards to check the types of the arguments before performing the addition.