function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Error: Both inputs must be numbers.');
    return 0;
  }
}

let result1 = addSafe(10, 20); // Returns 30
let result2 = addSafe("hello", 10); // Prints error and returns 0