let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

function nextInLine(arr,item){
  arr.push(item);
  const removed = arr.shift();
  return removed;
}

let testArr =[1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
  return true;
}
welcomeToBooleans();

function test (mycondition) {
  if(mycondition) {
    return "It was true";
  }
  return "It was false";
}
test(true);
test(false);

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));
console.log(compareEquality(30, 30));

console.log('\nfunction testNotEqual'); 

function testNotEqual(val) {
  if (val!==99) {
    return "not Equal";
  }
  return "Equal"
}
console.log(testNotEqual(10));

// function testStrictNotEqual
console.log('\nfunction testStrictNotEqual');
function testStrictNotEqual(val) {
  if (val!==17) {
    return "Not Equal";     
  }
  return "Equal"
}
console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual(17));