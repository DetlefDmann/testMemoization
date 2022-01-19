const memoFibonacci = (number, memo = {}) => {
  if (memo[number]) return memo[number];
  if (number <= 1) return 1;
  return (memo[number] =
    memoFibonacci(number - 1, memo) + memoFibonacci(number - 2, memo));
};
console.time("Memoised way");
console.log(memoFibonacci(0));
console.log(memoFibonacci(1));
console.log(memoFibonacci(20));
console.log(memoFibonacci(40));
console.log(memoFibonacci(50));
console.log(memoFibonacci(80));
console.log(memoFibonacci(90));
console.timeEnd("Memoised way");

const oldwayFibonacci = (number) => {
  if (number <= 1) return 1;
  return oldwayFibonacci(number - 1) + oldwayFibonacci(number - 2);
};

console.time("oldway");
console.log(oldwayFibonacci(0));
console.log(oldwayFibonacci(1));
console.log(oldwayFibonacci(20));
console.log(oldwayFibonacci(40));
console.log(oldwayFibonacci(42));
console.log(oldwayFibonacci(43));
console.log(oldwayFibonacci(44));
console.log(oldwayFibonacci(45));
console.timeEnd("oldway");
