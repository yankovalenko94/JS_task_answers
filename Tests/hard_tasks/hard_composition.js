// Максимально короткое решение :)
const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));