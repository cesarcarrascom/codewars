/*
    This time we want to write calculations using functions and get the results. Let's have a look at some examples:
        seven(times(five())); // must return 35
        four(plus(nine())); // must return 13
        eight(minus(three())); // must return 5
        six(dividedBy(two())); // must return 3

    Requirements:

        There must be a function for each number from 0 ("zero") to 9 ("nine")
        There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
        Each calculation consist of exactly one operation and two numbers
        The most outer function represents the left operand, the most inner function represents the right operand
        Division should be integer division. For example, this should return 2, not 2.666666...:

*/

function zero(fun) {
  return fun ? fun(0) : 0;
}
function one(fun) {
  return fun ? fun(1) : 1;
}
function two(fun) {
  return fun ? fun(2) : 2;
}
function three(fun) {
  return fun ? fun(3) : 3;
}
function four(fun) {
  return fun ? fun(4) : 4;
}
function five(fun) {
  return fun ? fun(5) : 5;
}
function six(fun) {
  return fun ? fun(6) : 6;
}
function seven(fun) {
  return fun ? fun(7) : 7;
}
function eight(fun) {
  return fun ? fun(8) : 8;
}
function nine(fun) {
  return fun ? fun(9) : 9;
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return x * y;
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}

console.log(two(plus(one())));
console.log(eight(minus(three())));
console.log(seven(times(five())));
console.log(six(dividedBy(two())));
