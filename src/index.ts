export {};

// EXAMPLE 1 - Declare a function that throws an Error in TypeScript

// 👇️ function throwErr(): never
function throwErr(): never {
  throw new Error('Something went wrong');
}

// ---------------------------------------------------

// // EXAMPLE 2 - `never` vs `void`

// // 👇️ function throwErr(): void
// function throwErr() {
//   throw new Error('Something went wrong');
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Functions that throw an error only some of the time

// function sometimesThrow(): number {
//   if (Math.random() > 0.5) {
//     return 100;
//   }

//   throw new Error('Something went wrong');
// }

// // 👇️ const result: number
// const result = sometimesThrow();

// console.log(result.toFixed());

// ---------------------------------------------------

// // EXAMPLE 4 - Using a union type

// function sometimesThrow(): number | never {
//   if (Math.random() > 0.5) {
//     return 100;
//   }

//   throw new Error('Something went wrong');
// }

// // 👇️ const result: number
// const result = sometimesThrow();

// console.log(result.toFixed());
