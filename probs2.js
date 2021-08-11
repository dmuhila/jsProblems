var a = recurFib(10);
console.log(a);
function recurFib(n, i = 2, result = [0, 1]) {
  //var result = [0, 1];
  // if (i == n) {
  //   return;
  // }
  // if (i >= 2) {
  //   console.log("i", i);
  //   result.push(result[i - 2] + result[i - 1]);
  //   i++;
  // }
  // console.log(result);
  // recurFib(n, i, result);
  // console.log(result[result.length - 1]); //result[n-1]

  if (n < 2) {
    return n;
  }

  return recurFib(n - 1) + recurFib(n - 2);
}

fib(10);
function fib(n) {
  let output = [];
  var temp;
  var a = 0;
  var b = 1;
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      output.push(i);
    } else {
      temp = a + b;
      a = b;
      b = temp;
      output.push(temp);
    }
  }

  console.log(output);
  console.log(output[n - 1]);
  return output[n - 1];
}

// spiral(1);
// spiral(2);
// spiral(3);
// spiral(4);
// spiral(5);
// spiral(6);
function spiral(n) {
  var result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  var counter = 0;
  var startRow = 0;
  var endRow = n - 1;
  var startCol = 0;
  var endCol = n - 1;
  while (startRow <= endRow && startCol <= endCol) {
    //Top row
    for (i = startCol; i <= endCol; i++) {
      result[startRow][i] = ++counter;
    }
    startRow++;

    //Right col
    for (i = startRow; i <= endRow; i++) {
      counter++;
      result[i][endCol] = counter;
    }
    endCol--;

    //Bottom row
    for (i = endCol; i >= startCol; i--) {
      result[endRow][i] = ++counter;
    }
    endRow--;

    //Left col
    for (i = endRow; i >= startRow; i--) {
      result[i][startCol] = ++counter;
    }
    startCol++;
  }
  console.log(result);
  return result;
}

// vowels("Hi There!");
// vowels("Why do you ask?");
// vowels("Why?");
function vowels(str) {
  // var arr = str.split("");
  // var output = [];
  // arr.forEach((s) => {
  //   if (s.match(/[a,e,i,o,u,A,E,I,O,U]/)) {
  //     output.push(s);
  //   }
  // });
  // console.log(output.length);
  // return output.length;

  const matches = str.match(/[aeiou]/gi); //g->doesn't stop at 1st match
  console.log(matches); //i->case insensitive
  if (matches) console.log(matches.length);
  return matches ? matches.length : 0;
}

// pyramidRecur(1);
// pyramidRecur(2);
// pyramidRecur(3);
// pyramidRecur(4);
function pyramidRecur(n, row = 0, hash = "", col = 0) {
  const midpoint = (2 * (n - 1)) / 2;
  //console.log(midpoint);
  if (n == row) {
    return;
  }
  if (col == 2 * n - 1) {
    console.log(hash);
    row++;
    return pyramidRecur(n, row);
  } else {
    if (col >= midpoint - row && col <= midpoint + row) {
      hash += "#";
      col += 1;
    } else {
      hash += " ";
      col += 1;
    }
  }
  //console.log("end1");
  return pyramidRecur(n, row, hash, col);
}

// pyramid(1);
// pyramid(2);
// pyramid(3);
//pyramid(4);
function pyramid(n) {
  for (let i = 0; i < n; i++) {
    //let
    if (i == n - 1) {
      //console.log("a");
      console.log("#".repeat(2 * n - 1));
    } else {
      //console.log("a");
      console.log(
        " ".repeat(n - 1 - i) +
          "#".repeat(2 * (i + 1) - 1) + //(2 * (n - (n - 1 - i)) - 1)
          " ".repeat(n - 1 - i)
      );
    }
  }
  console.log("end");
}

// steps(1);
// steps(2);
// steps(3);
// steps(4);
// steps(5);
function steps(n) {
  for (let i = 0; i < n; i++) {
    if (i !== n) {
      console.log("#".repeat(i + 1) + "a".repeat(n - (i + 1)));
    } else {
      console.log("#".repeat(n));
    }
  }
}

// capitalize("a short sentence");
// capitalize("a lazy fox");
// capitalize("look, it is working!");
function capitalize(str) {
  var arr = str.split(" ");
  var output;
  console.log(arr);
  var outputArr = arr.map((char) => {
    return (char = char[0].toUpperCase() + char.slice(1));
  });
  output = outputArr.join(" ");
  console.log(output);
  return output;
}

Input = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

function nameFilter() {
  var output = [];
  var arr = [];

  this.Input.forEach((emp) => {
    var count = 0;
    var pqr = emp;
    var temp = emp.employeeName;
    //arr.push(emp.employeeName);

    if (output.length !== 0) {
      output.every((o, i, output) => {
        if (o.employeeName !== temp && !arr.includes(temp)) {
          var newObj = {};
          newObj["employeeName"] = temp;
          newObj["count"] = count + 1;
          arr.push(newObj["employeeName"]);
          output.push(newObj);

          return false;
        } else {
          if (temp === o["employeeName"]) {
            o.count = o.count + 1;
            return false;
          }
          return true;
        }
      });
    } else {
      var obj = {};
      obj["employeeName"] = temp;
      obj["count"] = count + 1;
      output.push(obj);
      arr.push(obj["employeeName"]);

      console.log("obj", obj);
    }

    console.log(arr);
    //return output;
  });
  console.log("output", output);
}
