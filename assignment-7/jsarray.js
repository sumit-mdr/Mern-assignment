// Q1
// const arr = [1, 2, 3, 4, 5];    
// arr.forEach(function(value){
//     console.log(value);
// })


// Q2
// const nums = [10, 20, 30];
// const number=nums.map(num=> num+5);
// console.log(number);

// Q3
// const arr = [5, 12, 18, 25, 40];
// const array=arr.filter(num => num>20);
// console.log(array);

// Q4
// const values = [2, 4, 6, 8];
// const sum= values.reduce((previous,current)=> {
//     return previous+current;
// },0);
// console.log(sum);

// Q5
// const data = [3, -1, 7, 0];
// const neagtiveno = data.some(num=> num<0);
// console.log(neagtiveno);

// Q6
// const arr = [5, 10, 15];
// const positive = arr.every(num=> num>0);
// console.log(positive);

// Q7
// const arr = [12, 19, 25, 40];
// const result = arr.find (num=> num>20);
// console.log(result);

// Q8
// const arr = [7, 14, 21, 28];
// const result = arr.findIndex(num => num%7==0);
// console.log(result);

// Q9
// const colors = ["red", "blue", "green"];
// const result= colors.includes("blue");
// console.log(result);

// Q10
// const a = [1, 2];
// const b = [3, 4];
// const merge= [...a, ...b];
// console.log(merge)

// Q11
// const arr = [100, 200, 300];
// const [first, second]= arr;
// console.log(first,second);


// Q12
// const nums = [9, 8, 7];
// const num=[...nums];
// console.log(num);


// Q13
//  const arr = [1, 2, 2, 3, 4, 4];
// const newArr = [...new Set(arr)];
// console.log(newArr);


// Q14
//  const arr = [45, 12, 78, 34];
//  arr.sort((a,b)=> a-b);
//  console.log(arr)


// Q15
// const arr = [1, 2, 3, 4];
// const reverse= [...arr].reverse();
// console.log(reverse);
// console.log(arr);


// Q16
// const arr = [10, 15, 20, 25];
// const evennumber= arr.reduce((count,num) =>{
// if(num%2 === 0){
//     return count +1;

// }
// return count;

// },0);
// console.log(evennumber);


// Q17
// const fruits = ["apple", "banana", "mango"];
// const upper=  fruits.map(fruits=> fruits.toUpperCase());
// console.log(upper);


// Q18
// const words = ["cat", "elephant", "dog"];
// const animal= words.filter(words=>words.length >3);
// console.log(animal);


// Q19
// const arr = [12, 45, 7, 89];
// const max= arr.reduce((max,num)=> {
//     return Math.max(max,num);
// });
// console.log(max);


// Q20
// const arr = [10, 20, 30, 40];
// arr.splice(arr.indexOf(30),1);
// console.log(arr);


// Q21
// const arr = [1, [2, 3], [4, 5]];
// const flat= arr.flat();
// console.log(flat)


// Q22
// const arr = [5, 10, 15, 20];
// const avg= arr.reduce((sum,num)=> sum+num,0)/arr.length;
// console.log(avg);


// Q23
// const arr = [3, 6, 9, 12];
// const ascsorted= arr.every((v,i)=> i===0 || v>= arr[i-1]);
// console.log(ascsorted);


// Q24
//  const arr = [1, 2, 3, 4, 5];
//  arr.unshift(arr.pop());
//  console.log(arr);

// Q25
// const arr = [4, 8, 12, 16];
// const half= arr.map(num=>num/2);
// console.log(half);

// Q26
// const arr = [1, 0, false, 5, "", 10];
// const remove= arr.filter(Boolean);
// console.log(remove);


// Q27
// const arr = ["a", "b", "c"];
// const join= arr.join("");
// console.log(join);


// Q28
// const arr = [10, 20, 30];
// arr.splice(2,0,25);
// console.log(arr);


// Q29
// const arr = [2, 4, 6, 8];
// const even=arr.every(num=> num%2==0);
// console.log(even);


// Q30
// const arr = [1, 3, 5, 8];
// const even=arr.some(num=> num%2==0);
// console.log(even);


// Q31
// const arr = [1, 2, 3, 4, 5];
// const newarr= arr.map(num=> num*num);
// console.log(newarr);


// Q32
// const arr = ["ram", "shyam", "hari"];
// const cap= arr.map(name => name.charAt(0).toUpperCase()+ name.slice(1));
// console.log(cap)


// Q33
// const arr = [5, 15, 25, 35];
// const fil= arr.filter(num => num>10 && num<30);
// console.log(fil);


// Q34
// const arr = [10, 20, 20, 30, 30];
// const newa= [...new Set(arr)];
// console.log(newa);


// Q35
// const arr = [1, 2, 3, 4];
// const newarr= arr.reduce((product,num) => product*num,1);
// console.log(newarr);