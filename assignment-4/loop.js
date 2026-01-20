// 1
for (let i=1; i<=20; i++) {
  console.log(i);
}

// 2
let sum=0;
for (let i=1;i<=10;i++) {
  sum=sum+i;
}
console.log(sum);

// 3
for (let i=1; i<=10; i++) {
  console.log(5*i);
}
// 4
for (let i=1; i<=100; i++) {
  console.log(i);
}

// 5
let oddSum=0;
for (let i=1; i<=10; i++) {
  if (i%2 !== 0) {
    oddSum = oddSum + i;
  }
}
console.log(oddSum);
// 6
for (let i=20; i>=1; i--) {
  console.log(i);
}


// 7
for (let i=1; i<=10; i++) {
  console.log(3*i);
}
// 8
for (let i=1; i<=10; i++) {
  console.log(i*i);
}

// 9
let total=0;
for (let i=1; i<=100; i++) {
  total = total+i;
}
console.log(total);

// 10
for (let i=1; i<=5; i++) {
  console.log(i*i*i);
}
// 11
for (let i=50; i>=1; i--) {
  console.log(i);
}
// 12
for (let i=19; i>=1; i--) {
  if (i%2!==0) {
    console.log(i);
  }
}
// 13
let sumOdd=0;
let count=0;
let num=1;
while (count<5) {
  if (num%2!==0) {
    sumOdd=sumOdd + num;
    count++;
  }
  num++;
}
console.log(sumOdd);
// 14
for (let i=1;i<=10;i++) {
  console.log(i);
}
// 15
for (let i=1; i<=10; i++) {
  console.log(Math.pow(2, i));
}
// 16
let evenSum=0;
for (let i=2; i<=20; i=i+2) {
  evenSum=evenSum+i;
}
console.log(evenSum);

// 17
for (let i=1; i<=10; i++) {
  console.log(4 * i);
}

// 18
let coun = 0;
let number = 2;

while (coun < 5) {
    let isPrime = true;

    // Check if 'number' is divisible by any value from 2 up to its square root
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number);
        coun++;
    }

    number++;
}
// 19
for (let i=30; i>=10; i--) {
  if (i%2==0) {
    console.log(i);
  }
}
