  

//CONCAT
var batsman = ["V.Kohli", "R.Sharma", "S.Gill", "K.L.Rahul", "S.Iyer"];
var allRounder = ["H.Pandya", "R.Jadeja"];
var bowlers = ["J.Bumrah", "M.Shami", "M.Siraj", "K.Yadav"];

var result = batsman.concat(allRounder, bowlers);
console.log(result);

//Extra
var result = [...batsman, ...allRounder, ...bowlers]; //spread operator
console.log(result);

//INCLUDES
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
console.log(alphabets.includes("v"));
console.log(alphabets.includes("z"));

  //INDEX OF
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
console.log(alphabets.indexOf("n"));
console.log(alphabets.indexOf("e"));

//LAST INDEX OF
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
console.log(alphabets.lastIndexOf("n"));
console.log(alphabets.lastIndexOf("e"));

//SHIFT (removes) and UNSHIFT (add)  - FIRST
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.shift();
console.log(num);


var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.unshift(0);
console.log(num);

//POP (removes) and PUSH (add) - LAST
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.pop();
console.log(num);

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.push(10);
console.log(num);

//SPLICE (Alters original array)
// The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

//A.Removes
var arr = ["BMW", "Audi", "Ferrari", "Porsche"];
arr.splice(2, 1); //start,deleteCount
console.log(arr);

var arr = ["BMW", "Audi", "Ferrari", "Porsche"];
arr.splice(1); //start,deleteCount
console.log(arr);

//B.REMOVE And ADD
var skill = ["HTML", "CSS", "Javascript", "React js", "Node js", "Express js"];
skill.splice(0, 4, "Frontend");
console.log(skill); // ['Frontend', 'Node js', 'Express js']

skill.splice(1, 2, "Backend");
console.log(skill);

//SLICE (Returns element)
// Returns a copy of a section of an array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = num.slice(4, 7);
console.log(result);

var result = num.slice(1);
console.log(result);

var result = num.slice(-3, -1);
console.log(result);

var result = num.slice(-5);
console.log(result);

console.log(num);

//JOIN  (converts to string)
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = num.join();
console.log(result, typeof result);

var result = num.join("|");
console.log(result, typeof result);

var result = num.join(",");
console.log(result, typeof result);

//TO STRING (converts to string)
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = num.toString();
console.log(result, typeof result);

//SORT (Alters the original array)

//1.ALPHABETS
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];

//Ascending
//method 1
console.log(alphabets.sort()); //['a', 'd', 'd', 'e', 'e', 'n', 'r', 'v']
console.log(alphabets); //['a', 'd', 'd', 'e', 'e', 'n', 'r', 'v']

//method 2 (using regular function)
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
console.log(
  alphabets.sort(function (a, b) {
    return a.localeCompare(b);
  })
);

//method 2 (using arrow function)
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
console.log(alphabets.sort((a, b) => a.localeCompare(b)));

//Descending
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];

//(using regular function)
console.log(
  alphabets.sort(function (a, b) {
    return b.localeCompare(a);
  })
);

//(using arrow function)
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
console.log(alphabets.sort((a, b) => b.localeCompare(a)));

//2.DIGITS
var num = [4, 8, 11, 2, 1, 3, 15];

console.log(num.sort()); //expected-1,2,3,4,8,11,15  recieved-1,11,15,2,3,4,8

//ascending
//(using regular function)
console.log(
  num.sort(function (a, b) {
    return a - b;
  })
);

//(using arrow function)
var num = [4, 8, 11, 2, 1, 3, 15];
console.log(num.sort((a, b) => a - b));

//descending
//(using regular function)
var num = [4, 8, 11, 2, 1, 3, 15];
console.log(
  num.sort(function (a, b) {
    return b - a;
  })
);

//(using arrow function)
var num = [4, 8, 11, 2, 1, 3, 15];
console.log(num.sort((a, b) => b - a));


//FOREACH
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//single line
num.forEach((n) => console.log(n));

//multi line
num.forEach((n) => {
  console.log(n);
});

num.forEach((n) => {
  console.log(n * 2);
});

//usecase
var squareOfNumber = [];
num.forEach((n) => {
  squareOfNumber.push(n * n);
});
console.log(squareOfNumber); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

var cubeOfNumber = [];
num.forEach((n) => {
  cubeOfNumber.push(Math.pow(n, 3));
});
console.log(cubeOfNumber); // [1, 8, 27, 64, 125, 216, 343, 512, 729]

//doesnt work
var cubeOfNumber = num.forEach((n) => Math.pow(n, 3));
console.log(cubeOfNumber); //undefined

var cubeOfNumber = num.forEach(function (n) {
  return Math.pow(n, 3);
});
console.log(cubeOfNumber); //undefined

//MAP
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

num.map((n) => {
  console.log(n);
});

var doubleNumbers = num.map((n) => n * 2);
console.log(doubleNumbers);

var square = num.map((n) => n * n);
console.log(square);

var cube = num.map((n) => Math.pow(n, 3));
console.log(cube);

var cube = num.map(function (n) {
  return Math.pow(n, 3);
});
console.log(cube);

//FILTER
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var resultFilter = num.filter((n) => n > 5);
console.log(resultFilter); // [6,7,8,9]

var resultFilter = num.filter((n) => n % 2 === 0);
console.log(resultFilter); // [2, 4, 6, 8]

var resultFilter = num.filter((n) => {
  if (n > 5) {
    return n % 2 === 0;
  }
});
console.log(resultFilter); // [6, 8]

var resultFilter = num.filter((n) => n > 5 && n % 2 === 0);
console.log(resultFilter); // [6, 8]

//FIND
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var resultFind = num.find((n) => n > 5);
console.log(resultFind); //6

var resultFind = num.find((n) => n % 2 === 0);
console.log(resultFind); //2

//FIND INDEX
//Returns the index of the first element in the array where predicate is true, and -1 otherwise.
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var resultFind = num.findIndex((n) => n > 5);
console.log(resultFind); //5

var resultFind = num.findIndex((n) => n % 2 === 0);
console.log(resultFind); //1

//REDUCE
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum
//using normal function
var sum = num.reduce(function (total, current, i) {
  console.log({ total, current, i });
  return total + current;
}, 0);
console.log(sum);

//using arrow function
var sum = num.reduce((total, current) => {
  return total + current;
}, 0);
console.log(sum);

//difference
var bill = [1500, 100, 50, 200, 300, 50];

var billDiff = bill.reduce((total, current, i) => {
  // console.log({ total, current, i });
  return total - current;
}, 5000);
console.log(billDiff);

//alphabets
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];

var alphabetsAdd = alphabets.reduce((total, current, i) => {
  console.log({ total, current, i });
  return total + current;
}, "");
console.log(alphabetsAdd);

//REDUCE RIGHT
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];

var alphabetsAdd = alphabets.reduceRight((total, current, i) => {
  console.log({ total, current, i });
  return total + current;
});
console.log(alphabetsAdd);

//SOME (atleast one)
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = num.some((n) => {
  return n > 5;
});
console.log(result); //true

var result = num.some((n) => {
  return n > 10;
});
console.log(result); //false

var result = num.some((n) => {
    return n % 2 === 0;
  });
  console.log(result); //true

var name = ['abhi','saheb','vandana','mohit'];

var result = name.some(function(na){
  if(na === 'alok'){
    return na;
  }
})
console.log(result) //true

//EVERY
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = num.every((n) => {
  return n > 0;
});
console.log(result); //true

var result = num.every((n) => {
  return n > 5;
});
console.log(result); //false

//FILL
// Changes all array elements from start to end index to a static value and returns the modified array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

num.fill("HTML"); 
console.log(num);

num.fill("CSS", 3, 6);
console.log(num);

num.fill("JAVASCRIPT", 6);
console.log(num);

//FLAT
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
var nestedArray = [1, 2, 3, [4, 5, [6, 7, 8, 9, [10]]]];

console.log(nestedArray);
console.log(nestedArray.flat());
console.log(nestedArray.flat(1));
console.log(nestedArray.flat(2));
console.log(nestedArray.flat(3));

console.log(nestedArray.flat(Infinity));

var holeArray = [1, , 3, , 5];
console.log(holeArray);
console.log(holeArray.flat());

//FLATMAP  (flatMap = map + flat)

//case 1
var num = [1, 2, 3, , 4, 5, 6, , 7, 8, , 9];
console.log(num);

var result = num.map((n) => {
  return n * n;
});
console.log(result);
console.log(result.flat());

//case 2
var num = [1, 2, 3, , 4, 5, 6, , 7, 8, , 9];
console.log(num);

var result = num.flatMap((n) => {
  return n * n;
});
console.log(result);

//REVERSE
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.reverse());

//for...of -> value     //for...in -> key
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];

console.log(alphabets);
for (const i of alphabets) {
  console.log(i);
}

for (const i in alphabets) {
  console.log(i);
}

//KEYS
var arr = alphabets.keys();
console.log(arr);
for (const i of arr) {
  console.log(i);
}

//VALUES 
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
var arr = alphabets.values();
for (const i of arr) {
  console.log(i);
}

console.log(arr);
console.log(arr.next());

//ENTRIES
var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
var arr = alphabets.entries();
for (const i of arr) {
  console.log(i);
}

//COPY WITHIN
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.copyWithin(5, 0, 3));

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.copyWithin(2, 0, 3));

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.copyWithin(0, 5, 8));

var alphabets = ["d", "e", "v", "e", "n", "d", "r", "a"];
console.log(alphabets.copyWithin(5, 0, 3));

//basic of generator function
function* greet() {
  yield 10;
  yield 20;
  yield 30;
}
var arr = greet();
// console.log(arr.next()); //10
// console.log(arr.next()); //20
// console.log(arr.next());
// console.log(arr.next());

for (const i of arr) {
  console.log(i);
}

var arr1 = [40] 
var arr2 = new Array(40)
console.log(arr1,arr2,typeof arr2);

var arr = [11, 22, 33, 44, 55, 66];
// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var res = arr.map((e) => (e % 2 === 0));
console.log(res);

var name = 'abhishek kale'