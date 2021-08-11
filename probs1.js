// anagrams("rail safety!", "fairy tales");
// anagrams("RAIL! SAFETY!", "fairy tales");
// anagrams("hI There!", "Bye There");

function anagrams(strA, strB) {
  let stringA = strA.split("");
  let stringB = strB.split("");
  let strAarr = [];
  let strBarr = [];
  var output = true;
  var objA = {};
  var objB = {};
  var count = 0;
  console.log(stringA);
  stringA.forEach((s) => {
    if (s.match(/[a-zA-Z]/)) {
      strAarr.push(s.toLowerCase());
    }
  });
  console.log(strAarr);
  stringB.forEach((s) => {
    if (s.match(/[a-zA-Z]/)) {
      strBarr.push(s.toLowerCase());
    }
  });
  console.log(strBarr);

  for (let a of strAarr) {
    if (objA[a]) {
      objA[a]++;
    } else objA[a] = count + 1;
  }
  for (let b of strBarr) {
    objB[b] = objB[b] + 1 || 1;
    // if (objB[b]) {
    //   objB[b]++;
    // } else objB[b] = count + 1;
  }
  console.log(objA, objB);
  for (let a in objA) {
    if (objA[a] !== objB[a]) {
      output = false;
    }
  }
  //if (Object.keys(objA) === Object.keys(objB)) output = true;
  console.log(output);
  return output;
}

// anagram("rail safety!", "fairy tales");
// anagram("RAIL! SAFETY!", "fairy tales");
// anagram("hI There!", "Bye There");
function anagram(strA, strB) {
  console.log(cleanString(strA) == cleanString(strB));
  return cleanString(strA) == cleanString(strB);
}
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// chunky([1, 2, 3, 4], 2);
// chunky([1, 2, 3, 4, 5], 2);
// chunky([1, 2, 3, 4, 5, 6, 7, 8], 3);
// chunky([1, 2, 3, 4, 5], 4);
// chunky([1, 2, 3, 4, 5], 10);
function chunky(arr, n) {
  var input = [];
  input = arr;
  var index = n;
  var output = [];
  for (let i = 0; i < input.length; i = index + i) {
    // if (input.length % index == 0 || input.length % index !== 0) {
    //   output.push(input.slice(i, i + index));
    // }
    // else if (input.length % index !== 0) {
    //   output.push(input.slice(i, i + index));
    //   // console.log(i, i + index);
    //   // console.log(output);
    // }
    // else {
    //   output.push(input);
    // }
    output.push(input.slice(i, i + index));
  }
  console.log(output);
  return output;
}

//fizzbuzz(15);
function fizzbuzz(n) {
  let output;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      output = "fizzbuzz";
    } else if (i % 5 == 0) {
      output = "buzz";
    } else if (i % 3 == 0) {
      output = "fizz";
    } else output = i;
    console.log(output);
  }

  //return output;
}

//maxChar("aaaaaabbaccccdddd eeeeeeeeeeeee");
function maxChar(str) {
  // var obj = {};
  // var maxCount;
  // var temp = 0;
  // str.split("").forEach((char) => {
  //   if (Object.keys(obj).includes(char)) {
  //     obj[char] = obj[char] + 1;
  //   } else obj[char] = 1;
  // });
  // console.log(obj);
  // Object.values(obj).forEach((val) => {
  //   if (val >= temp) {
  //     temp = val;
  //     maxCount = val;
  //   } else maxCount = temp;
  // });
  // console.log(maxCount);
  // var charInd = Object.values(obj).indexOf(maxCount);
  // var char = Object.keys(obj)[charInd];
  // console.log(char);
  // return char;
  var max = 0;
  var maxChar = "";
  var obj = {};
  //'of' is used for array, string looping
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  //'in' is used for object keys looping
  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
  return maxChar;
}

//reverseInt(109);
//reverseInt(-500);
function reverseInt(int) {
  var reversed = int.toString().split("").reverse().join("");
  console.log(parseInt(reversed) * Math.sign(int));
  return parseInt(reversed) * Math.sign(int);

  // if (Math.sign(int) == -1) {
  //   reversed = -1 * parseInt(reversed);
  // }

  // console.log(reversed);
  // return reversed;
}

// var a = palindrome("aba");
// var b = palindrome("abc");
function palindrome(str) {
  var input = str.split("");
  var reversed = "";
  var output = false;
  for (let s of input) {
    reversed = s + reversed;
  }
  // console.log(reversed);
  // console.log(input.join(""));
  // if (input.join("") == reversed) {
  //   output = true;
  // }
  console.log(input.join("") == reversed);
  return input.join("") == reversed;
  console.log(output);
  return output;
}
// console.log(a);
// console.log(b);

var element = 12098;
//convertToArr(element);

function convertToArr(num) {
  var output = [];

  output = converter(num);
  output = output.reverse();
  console.log(output);
  return output;
}
function converter(num) {
  // a%10
  var arr = [];
  while (num > 0) {
    var float = num / 10;
    var temp;

    if (num % 10 == 0) {
      temp = "0";
      arr.push(temp);
    } else {
      temp = float.toString().split(".")[1];
      if (temp > 0) arr.push(temp);
    }

    num = float.toString().split(".")[0];
  }
  return arr;
}

var array5 = [1, 2, 3, 4, 5, 6, 7];
//reverse(array5);
function reverse(arr) {
  var input = [...arr];
  var output = rearrange(input);
  return output;
}
function rearrange(arr) {
  var len = arr.length;
  var rearranged = [];
  // for (let i = 0; i < len; i++) {
  //   rearranged.push(arr.pop());
  // }
  for (let i = len - 1; i >= 0; i--) {
    rearranged.push(arr[i]);
  }
  console.log("rearr", rearranged);
  return rearranged;
}

var array2 = [1, 11, 3];
var array3 = [3, 11, 2];
var array4 = [9, 11, 10];

//intersection(array2, array3, array4);

function intersection(...arr) {
  //   console.log(...arr);
  //   console.log(arr.length);
  var initial = arr[0];
  for (let i = 0; i < arr.length; i++) {
    var intersect = [];
    for (let j = 0; j < arr[i].length; j++) {
      intersect.push(findIntersectionArray(initial, arr[i][j]));
    }
    initial = [...intersect];
    console.log("Com", initial);
  }
  return initial;
  // arr.forEach((a1) => {
  //   a1.forEach((a2) => {
  //     if (a1 == a2) {
  //       common.push(a1);
  //     }
  //   });
  // });
}

function findIntersectionArray(array, input) {
  array.forEach((element) => {
    if (element == input) {
      return element;
    }
  });
}
//uniqueArr(array);
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function uniqueArr(arr) {
  var newArr = [];
  arr.forEach((a) => {
    if (!newArr.includes(a)) {
      newArr.push(a);
    }
    return newArr;
  });
  console.log(newArr);
}

//console.log("ajnfjf");

//concatArr(arrays);
var arrays = [
  [0, 1],
  [2, 3],
  [4, 5],
  [1, 2, 3],
  [9, 8, 7, 6],
];

function concatArr(arr) {
  var count = 0;
  var zeroInd = [];
  arr.forEach((a) => {
    if (count == 0) zeroInd = a;
    else zeroInd = zeroInd.concat(a);

    count += 1;
    return zeroInd;
  });
  console.log(zeroInd);
}
