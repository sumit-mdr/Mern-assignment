// 1 loop one to ten
function printonetoten() {
  for (let i=1; i<=10; i++) {
    console.log(i);
  }
}
printonetoten()

// 2 sum of first n natural no  
function sumofnaturalnumbers(n) {
  let sum = 0;
  for (let i= 1; i<=n; i++) {
    sum=sum+i;
  }
  return sum;
}
console.log(sumofnaturalnumbers(5));
// 3
function printevennumbers() {
  for (let i=1; i<=20; i++) {
    if (i%2==0) {
      console.log(i);
    }
  }
}

// 4
function printoddnumbers() {
  for (let i=1; i<=20; i++) {
    if (i%2!== 0) {
      console.log(i);
    }
  }
}
// 5
function factorial(n) {
  let result=1;
  for (let i=1; i<=n; i++) {
    result=result*i;
  }
  return result;
}
// 6
function tableoffive() 
{
  for (let i= 1; i<=10; i++)
  {
    console.log(5 * i);
  }
}
tableoffive()
// 7
function reverse()
 {
  for (let i=10; i>=1; i--) {
    console.log(i);
  }
}
// 8
function multipleof3() {
  for (let i=1; i<=30; i++) {
    if (i%3==0) {
      console.log(i);
    }
  }
}
// 9
function sumofeven() {
  let sum=0;
  for (let i=1; i<=50; i++) {
    if (i%2==0) {
      sum=sum+i;
    }
  }
  return sum;
}
// 10
function sumofodd() {
  let sum=0;
  for (let i=1; i<=50; i++) {
    if (i%2!==0) {
      sum=sum + i;
    }
  }
  return sum;
}
// 11
function divisibleby5() {
  for (let i=1; i<=100; i++) {
    if (i%5 ===0) {
      console.log(i);
    }
  }
}
// 12
function printFibonacci() {
  let a = 0;
  let b = 1;

  for (let i = 1; i <= 10; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

// 13
function countDigits(num) {
  let count = 0;

  for (; num > 0; num = Math.floor(num / 10)) {
    count++;
  }

  return count;
}
// 14
function printSquares() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
}

// 15
function sumOfSquares(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + (i * i);
  }

  return sum;
}


// 16
function printCubes() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i * i);
  }
}


// 17
function smallestDivisibleBy3And4() {
  for (let i=1; ; i++) {
    if (i%3===0 && i%4===0) {
      return i;
    }
  }
}

// 18
function printFirstTenEvenNumbers() {
  for (let i=1; i<=20; i++) {
    if (i%2===0) {
      console.log(i);
    }
  }
}

// 19
function printDivisibleBy2And5() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}
printDivisibleBy2And5();

// 20
function sumMultiplesOf3Or5() {
  let sum = 0;

  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }

  return sum;
}
console.log(sumMultiplesOf3Or5());



