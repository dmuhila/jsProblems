function socks(n,arr){
    let a =arr;
    let obj = {};
    let output = 0;

   for(let element of a){
       if(obj[element])
       obj[element]++;
       else
       obj[element] = 1 
   }
   console.log(obj);
   Object.values(obj).forEach((colour)=>{
       if(colour>0){
        if(colour%2 ==0)
            output += colour/2;
        else{
            output += Math.floor(colour/2);
        }
        console.log(output);
       }
   })
   console.log(output);
   return output;
}

n=7;
arr = [1,2,1]
//socks(n,arr)

const users = [
    {fname:"Leo", lname:"Messi",age:30},
    {fname:"Neymar", lname:"Jr",age:31},
    {fname:"David", lname:"Villa",age:35},
    {fname:"David", lname:"Beckham",age:30}
]

//name
const names = user.map((user)=> user.fname + " "+user.lname)
console.log(names)

function findAge(user){
    var obj = {};
    if(obj[user.age]){
        obj[user.age]++;
    }
    else
    obj[user.age] = 1;
    return obj;
}
//{30:2, 31:1, 35:1}
const outputUserAge = users.reduce((obj,user)=>{
    if(obj[user.age]){
        obj[user.age]++;
    }
    else
        obj[user.age] = 1;
    return obj;
},{})

console.log(outputUserAge);

//first name all ppl whose age is less than 35
const fname = users.filter((user)=>{
  return user.age < 35
}).map((user)=>  user.fname)

console.log(fname)

//first name all ppl whose age is less than 35 using reduce()
const firstName = users.reduce((arr,curr)=>{
    if(curr.age<35){
        arr.push(curr.fname)
    }
    return arr;
},[])

const numArr = [5,1,3,2,6]

//[10,2,6,4,12]
function double(n){
    return n*2
}

//[15,3,9,6,18]
function triple(n){
    return n*3
}

//["101","1", "11", "10", "110"]
function binary(n){
    return n.toString(2)
}
const result1 = numArr.map(double)
const result2 = numArr.map(triple)
const result3 = numArr.map(binary)

console.log(result1);

//filter odd values
function isEven(n){
    return n % 2 == 0;
}

//filter odd values
function isOdd(n){
    return n % 2;      //returns n if n%2 is true
}

const resultEven = numArr.filter(isEven);
const resultOdd = numArr.filter(isOdd);
console.log(resultEven);

//sum
const sum = numArr.reduce((acc,curr)=>{
    return acc = acc + curr;
},0)

//max
const max = numArr.reduce((max, curr)=>{
    if(curr>max){
        max = curr;
    }
    return max
},0)

var today = "abc";
let today = "cde";

console.log(today);