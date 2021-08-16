/* arithmetic */
function arithmeticSeq (first, second, num) {
   let diff = second - first;
   let fact = (num - 1) * diff;
   let term = first + fact;
   return term;
};

//simplify//
let arithmeticSeq = (first, second, num) => {
   let diff = second - first;
   let fact = (num - 1) * diff;
   let term = first + fact;
   return term;
};
/* end */


/* fibonanci */
function fibonanciSeq(numbers){
	let fib = [], n1 = 0, n2 = 1, nextTerm;
	for (let i = 1; i <= numbers; i++) {
      	//fib.push(n1);
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
		fib.push(n1);
	}
  return fib;
}

//simplify//
let fibonanciSeq = (numbers) => {
	let fib = [], n1 = 0, n2 = 1, nextTerm;
	for (let i = 1; i <= numbers; i++) {
      	//fib.push(n1);
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
		fib.push(n1);
	}
	return fib;
}
/* end */