
function findFaktorialNumber(n) {
  if (typeof n !== "number") {
    console.log('it is not number');
  } else if(n < 0) {
    console.log('Please, enter a not negative number');    
  } else if (n === 0) {
    return 1;
  } else {
    return n * findFaktorialNumber (n - 1);
  }
}
console.log( findFaktorialNumber(-5) );





//через тернарный оператор

const factorial = n => 
n < 0 
? console.log('Please, enter a not negative number')
: n == 0
? 1
: n * factorial (n - 1);

console.log(factorial(4));