const arr = [3, 6, 9, 12, 15, 18, 21];

const mutiply = arr.map((item, i) => {
  return item * 5;
});

const Value = mutiply.filter(item => item > 25 && item < 61);

console.log(Value);