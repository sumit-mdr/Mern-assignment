// 1
let age=18;
if(age>=18){
    console.log("Adult")
}
else{
    console.log("Not an Adult")
}
// 2
let number=7;
if(number>=0)
{
    console.log("Positive number")
}
else{
    console.log("Negative number")
}
// 3
let no=7;
if(no%2==0)
{
    console.log("even number")
}
else{
    console.log("odd number")
}
// 4
let char = 'z';

if ("aeiouAEIOU".includes(char)) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
// 5

let a = 1;

if (a== 0) {
  console.log("Zero");
} else {
  console.log("Not-zero");
}

// 6
let no1=7;
if(no1%5==0)
{
    console.log("multile of 5")
}
else{
    console.log("not a multile of 5")
}
// 7
let n1=77;
if(n1>10){
    console.log("greater than 10")
}
else{
    console.log("less than 10")
}
// 8
let c = 7;
let b = 7;

if (c==b) {
  console.log("Equal");
} else {
  console.log("Not equal");
}
// 9
let text = "hie";

if (text.length > 5) {
  console.log("Long string");
} else {
  console.log("Short string");
}
// 10
let letter = 'S';

if (letter === letter.toUpperCase()) {
  console.log("Uppercase");
} else {
  console.log("Lowercase");
}
   
// 11
let day = "Saturday";

if (day === "Saturday") {
  console.log("Weekend");
} else {
  console.log("Not weekend");
}

// 12
let ag=18;
if(ag>12){
    console.log("not a child")
}
else{
    console.log("child")
}
// 13
let temp=7;
if(temp>30){
    console.log("hot")
}
else{
    console.log("cold")
}
// 14
    let num2=500;
if (num2>=1 && num2<=100) {console.log("In range");}
else {console.log("Out of range");}
// 15
let s=60;

if (s>=50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// 16

let d=7;

if (d%3==0) {
  console.log("Divisible by 3");
} else {
  console.log("Not divisible by 3");
}
// 17
let time=10;

if (time< 12) {
  console.log("Morning");
} else {
  console.log("Afternoon");
}
// 18
let teen=15;

if (teen>=13 && teen<=19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}

// 19
let txt="banana";

if (txt.includes("a")) {
  console.log("Contains 'a'");
} else {
  console.log("Does not contain 'a'");
}
// 20
let year=2082;

if ((year%4==0 && year%100 !== 0) || year%400==0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
// 21
let num3=-7;

if (num3<0) {
  console.log("Negative");
} else {
  console.log("Positive or zero");
}
// 22
let input="7777";

if (input=="7534") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// 23
let n3=7;
let n2=5;

if (n3>n2) {
  console.log("First is greater");
} else {
  console.log("Second is greater or equal");
}
// 24
let numb= 7;
let isPrime = true;

if (numb<= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < numb; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not prime");
}


// 25
let age4=100;

if (age4>=65) {
  console.log("Eligible for senior discount");
} else {
  console.log("Not eligible");
}
// 26

let s1="hello";
let s2="hellao";

if (s1==s2) {
  console.log("Match");
} else {
  console.log("Do not match");
}

// 27
let num4=8;

if (num4%2==0) {
  console.log("Multiple of 2");
} else {
  console.log("Not a multiple of 2");
}   
// 28
let age5=17;
if (age5>=18) {
  console.log("Eligible");
} 
else {
  console.log("Not eligible");
}
// 29
let letter1='a';
if (letter1==letter1.toLowerCase()) {
  console.log("Lowercase");
} else {
  console.log("Uppercase");
}
// 30
let num5=7;
if (num5>=-9 && num5<=9) {
  console.log("Single-digit");
} else {
  console.log("More than one digit");
}

// 31
let num6=40;
if (num6%10==0) {
  console.log("Divisible by 10");
} else {
  console.log("Not divisible by 10");
}
// 32
let month=7;
if (month==1 || month==3 || month==5 || month==7 || 
    month==8 || month==10 || month==12) {
  console.log("31 days");
} else {
  console.log("Not 31 days");
}
// 33
let password="password123";
if (password.length>=8) {
  console.log("Valid password");
} else {
  console.log("Password too short");
}
// 34
let z=0;
if (z==0) {
  console.log("Zero");
} else {
  console.log("Not zero");
}
// 35
let marks=99;
if (marks>=90) {
  console.log("Grade A");
} else
     {
  console.log("Less than Grade A");
}
// 36
let f= "";
if (f.length==0) {
  console.log("Empty");
} else {
  console.log("Not empty");
}
// 37
let num7=16;
if (num7%4==0) {
  console.log("Multiple of 4");
} else
     {
  console.log("Not a multiple of 4");
}
// 38
let today="Monday";
if (today=="Sunday") 
    {
  console.log("Sunday");
} else {
  console.log("Not Sunday");
}
// 39
let word="Apple";
if (word.startsWith("A")) {
  console.log("Starts with A");
} else {
  console.log("Does not start with A");
}
// 40
let line="Hello World";
if (line.includes(" ")) {
  console.log("Contains space");
} else {
  console.log("No space");
}
// 41
let str1 = "Hello!";
if (str1.length%2==0) 
{
  console.log("Even length");
} 
else {
  console.log("Odd length");
}
// 42
let degree=69;
if (degree>100) {
  console.log("Above boiling point");
} 
else {
  console.log("Below boiling point");
}
// 43
let tim=10;
if (tim>=9 && time<=17) {
  console.log("Working hours");
} 
else {
  console.log("Off hours");
}
// 44
let bmi=22;
if (bmi>=18.5 && bmi<=24.9) 
    {
  console.log("Healthy");
} 
else {
  console.log("Not healthy");
}
// 45
let num8=9;
if (num8%2!==0) {
  console.log("Odd");
} 
else {
  console.log("Even");
}
// 46
let char2='5';
if (char2>= '0' && char2<='9') {
  console.log("Digit");
} 
else {
  console.log("Not a digit");
}
// 47
let message="Hello!";
if (message.endsWith("!")) 
    {
  console.log("Exclamation mark");
} 
else {
  console.log("No exclamation mark");
}
// 48
let dayName = "Sunday";
if (
  dayName== "Monday" ||
  dayName== "Tuesday" ||
  dayName== "Wednesday" ||
  dayName== "Thursday" ||
  dayName== "Friday"
) {
  console.log("Weekday");
} 
else {
  console.log("Weekend");
}
// 49
let number2 = 69;
if (Number.isInteger(Math.sqrt(number2))) {
  console.log("Perfect square");
}
 else {
  console.log("Not a perfect square");
}
// 50
let temperature=69;
if (temperature>=15 && temperature<=25) {
  console.log("Comfortable");
} else {
  console.log("Uncomfortable");
}
// loop
for (let i = 1; i <= 20; i++) {
  console.log(i);
}



















 








