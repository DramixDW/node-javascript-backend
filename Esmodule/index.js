async function main() {
   const { fizzBuzzFor } = await import("./fizzbuzz.mjs");
   fizzBuzzFor(100);
}

main();