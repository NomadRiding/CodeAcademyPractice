/*************** First Example  ***********************/

/* Croquet Club has two memberships, Senior and Open. If age is over 55, and handicap is greater than 7 they are Senior. */

// the way I figured it out
let data = [[12, 4], [51, 5], [36, 4], [69, 21]]

function openOrSenior(data) {
  return data.map(x => { if (x[0] >= 55 && x[1] > 7) { return 'Senior' } else { return 'Open' } });
}

/* a method I found later that I liked

function openOrSenior(data) {
  return data.map(([age,handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open' )
}
*/

/********************* Interview Question that Stumped me ******************/

// organize the numbers from smallest to largest

// let numbers = [1,3,-4,-5,2,6,9,-8]

/* which now I've learned to handle such request

function orderNum(num){
  return num.sort(function(a,b){return a - b})
}
console.log(orderNum(numbers))
// and from largest to smallest

function orderNum(num){
  return num.sort(function(a,b){return a + b})
}
console.log(orderNum(numbers))
*/
