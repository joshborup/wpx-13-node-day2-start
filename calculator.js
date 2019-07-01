function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function mult(num1, num2) {
  return num1 * num2;
}

function calcluator(num1, num2, cb) {
  return cb(num1, num2);
}

console.log(calcluator(100, 1000, mult));
