var foo = 'bar';
var left = 1;
var right = 2;

function sum(a, b) {l
  var c = a + b;
  debugger; // <<<< Stops execution
  return c;
}

console.log(foo);
console.log(sum(left, right));