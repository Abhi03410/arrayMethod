//An array is a data structure used to store multiple values in a varable

//Array literal method
var arr = ["BMW", "Audi", "Ferrari", "Porsche"];
console.log(arr, typeof arr);

//Array constructor method
var arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(arr, typeof arr);

//Array contstructor method use Create to the multiple Array

/* var studentList1 = new Array (['name','abhi'],['age',18]);

console.log(studentList1[0],typeof studentList1);
console.log(studentList1[0][0],typeof studentList1);
console.log(studentList1[0][1],typeof studentList1);

console.log(studentList1[1],typeof studentList1);
console.log(studentList1[1][0],typeof studentList1);
console.log(studentList1[1][1],typeof studentList1); */

//Get
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr = ["BMW", "Audi", "Ferrari", "Porsche"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length - 1]);

//Set
var arr = ["BMW", "Audi", "Ferrari", "Porsche"];
arr[arr.length] = "Mercedes"
console.log(arr);

//Modify
var arr = ["BMW", "Audi", "Ferrari", "Porsche"];
arr[0] = "Kia"
console.log(arr);

//Delete
var arr = ["BMW", "Audi", "Ferrari", "Porsche"];
delete arr[2]
console.log(arr);


