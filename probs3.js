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
const names = users.map((user)=> user.fname + " "+user.lname)
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

// var today = "abc";
// let today = "cde";

// console.log(today);

//2D
var arr = [[1,1,1,0,0,0],
           [0,1,0,0,0,0],
           [1,1,1,0,0,0],
           [0,0,2,4,4,0],
           [0,0,0,2,0,0],
           [0,0,1,2,4,0]];

var arr1 = [[1,1,1,0,0,0],
            [0,1,0,0,0,0],
            [1,1,1,0,0,0],
            [0,9,2,-4,-4,0],
            [0,0,0,-2,0,0],
            [0,0,-1,-2,-4,0]];  
            
var arr2 = [[-9,-9,-9,1,1,1],
            [0,-9,0,4,3,2],
            [-9,-9,-9,1,2,3],
            [0,0,8,6,6,0],
            [0,0,0,-2,0,0],
            [0,0,1,2,4,0]];            
var arr3 = [[0,-4,-6,0,-7,-6],
            [-1,-2,-6,-8,-3,-1],
            [-8,-4,-2,-8,-8,-6],
            [-3,-1,-2,-5,-7,-4],
            [-3,-5,-3,-6,-6,-6],
            [-3,-6,0,-8,-6,-7]]
function hourglassSum(arr1) {
  var arr = arr1;  
  let sumArr = [];
  var highestSum = -63; //constraints -9<= arr[i][j] <=9   0<= i,j <=5
  for(let n=0; n<4; n++){
    for(let m=0; m<4; m++){
     let countRow = 0;
     let sum = 0;
     console.log("n ",n);
     console.log("m ",m); 
    for(let i=n; i<n+3; i++){
        let countCol = 0;
      for(let j=m; j<m+3; j++){
        console.log("Row count ",countRow);
        console.log("Col count ",countCol); 
        if(countRow!==1 || (countCol!==0 && countCol!==2)){
            console.log("num ",arr[i][j]);
          sum = sum + arr[i][j];
          //console.log(sum);
          console.log("i ",i);
         console.log("j ",j);  
        }
        countCol++;
      }
      countRow++;  
   }
   //console.log(sum);
   sumArr.push(sum); 
   console.log(sumArr);
   console.log(arr);
  }
}
sumArr.filter((sum)=> {
    if(sum>highestSum){
        highestSum = sum;
        }
        console.log(highestSum);
    //return highestSum;
  })
  return highestSum;
}

let maxSum = hourglassSum(arr3);
console.log(maxSum)


