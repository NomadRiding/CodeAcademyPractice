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

/* Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

*/

/********** My strategy  **********/

/*
function tribonacci(signature, n) {
  let sPoint = signature;
  for(i = 3; i < 3; i++) {
    sPoint.push((sPoint[i-1] + sPoint[i-2] + sPoint[i-3]));
  }
  return sPoint.slice(0,n);
}
*/

/* Best practice of the code

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) { // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
*/
