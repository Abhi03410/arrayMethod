var cars = [
  "Audi",
  "BMW",
  "Porsche",
  "Ferarri",
  "Bugatti",
  "Mercedes",
  "Lamborghini",
];

// Print out each cars
console.log(cars);

cars.forEach((car, index) => {
  console.log(car);
});

cars.map((car, index) => {
  console.log(car);
});

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//Print the number of cars in the array
console.log("Number of cars =", cars.length);

//Print the first cars, middle and last cars

//first
console.log(cars[0]);
console.log(cars.slice(0, 1)[0]);

//middle
console.log(cars[cars.length - 4]);
console.log(cars.slice(3, 4)[0]);

var middleIndex = Math.floor(cars.length / 2);
console.log(middleIndex);
console.log(cars[middleIndex]);

//last
console.log(cars.slice(-1)[0]);
console.log(cars[cars.length - 1]);

// Change each cars name to uppercase one by one and print them out
cars.forEach((car) => {
  console.log(car.toUpperCase());
});

// Print the array like as a sentence: Audi, BMW, Porsche, Ferarri, Bugatti, Mercedes and Lamborghini are luxurious cars.

// var otherCars = cars.toSpliced(6,0,"and")
// console.log(otherCars.push("are luxurious cars."));
// console.log(otherCars.join(", "));

var otherCars = cars.slice(0, 6);
console.log(otherCars);

var lastCar = cars.slice(-1);
console.log(lastCar);

var result = `${otherCars.join(", ")} and ${lastCar[0]} are luxurious cars.`;
console.log(result);

//Check if 1."BMW"  2."Ford" exists in the cars array. If it exist return "the car is available" else return a "cars is not available"

cars.includes("BMW")
  ? console.log("the car is available")
  : console.log("the car is not available");

if (cars.includes("BMW")) {
  console.log("the car is available");
} else {
  console.log("the car is not available");
}

if (cars.includes("Ford")) {
  console.log("the car is available");
} else {
  console.log("the car is not available");
}

//Filter out cars which have more than one 'r' with the filter method

var result = cars.filter((car) => {
  console.log(car.split("r"));
  return car.split("r").length > 2;
});
console.log(result);

var filteredCars = cars.filter(function (n) {
  console.log(n.match(/r/g));
  var countOfR = (n.match(/r/g) || []).length;
  return countOfR > 1;
});
console.log(filteredCars);

//Sort the array using sort() method
console.log(cars.sort());
console.log(cars);

// Reverse the array using reverse() method
var cars = [
  "Audi",
  "BMW",
  "Porsche",
  "Ferarri",
  "Bugatti",
  "Mercedes",
  "Lamborghini",
];

console.log(cars.reverse());
console.log(cars);

var cars = [
  "Audi",
  "BMW",
  "Porsche",
  "Ferarri",
  "Bugatti",
  "Mercedes",
  "Lamborghini",
];

// Slice out the first 3 cars from the array
console.log(cars.slice(0, 3));

// Slice out the last 3 cars from the array
console.log(cars.slice(-3));

// Slice out the middle 3 cars from the array
console.log(cars.slice(2, 5));

// Remove the first car from the array
console.log(cars.shift());
console.log(cars);

// Remove the middle car from the array
var cars = [
  "Audi",
  "BMW",
  "Porsche",
  "Ferarri",
  "Bugatti",
  "Mercedes",
  "Lamborghini",
];
console.log(cars.splice(3, 1));
console.log(cars);

// Remove the last car from the array
var cars = [
  "Audi",
  "BMW",
  "Porsche",
  "Ferarri",
  "Bugatti",
  "Mercedes",
  "Lamborghini",
];
console.log(cars.pop());
console.log(cars);

// Remove all cars
var cars = [
  "Audi",
  "BMW",
  "Porsche",
  "Ferarri",
  "Bugatti",
  "Mercedes",
  "Lamborghini",
];
// cars.splice(0);
cars.length = 0;
console.log(cars);

var cars = [
  "Audi",
  "BMW",
  "Porsche",
  "Ferarri",
  "Bugatti",
  "Mercedes",
  "Lamborghini",
];

function avail(cars) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i] === "BMW") {
      return "the car is available";
    }
  }
  return "the car is not available";
}
var result = avail(cars);
console.log(result);

//
var characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
console.log(characters);

//MAP
//1
var result = characters.map((e) => {
  return e.name;
});
console.log(result);

//2
var result = characters.map((e) => {
  return e.height;
});
console.log(result);

//3
var result = characters.map((e) => {
  return {
    name: e.name,
    height: e.height,
  };
});
console.log(result);

//3 ES6
var result = characters.map(({ name, height }) => {
  return {
    name,
    height,
  };
});
console.log(result);

//4
var result = characters.map((e) => {
  var fullName = e.name.split(" ");
  console.log(fullName[0]);
  return fullName[0];
});
console.log(result);

//REDUCE
//1
var result = characters.reduce((total, current, i) => {
  console.log({ total, current, i });
  return total + parseFloat(current.mass);
}, 0);
console.log(result);

//2
var result = characters.reduce((total, current, i) => {
  // console.log({total, current, i});
  return total + parseFloat(current.height);
}, 0);
console.log(result);

//3
var result = characters.reduce((total, current) => {
  return total + current.name.length;
}, 0);
console.log(result);

//4
var result = characters.reduce((total, current) => {
  return total + current.eye_color.length;
}, 0);
console.log(result);

//FILTER
//1
var result = characters.filter((e) => {
  console.log(parseFloat(e.mass) > 100);
  return parseFloat(e.mass) > 100;
});
console.log(result);

//2
var result = characters.filter((e) => {
  console.log(parseFloat(e.height) < 200);
  console.log(e.height < 200);
  return parseFloat(e.height) < 200;
});
console.log(result);

//3
var result = characters.filter((e) => {
  console.log(e.gender === "male");
  return e.gender === "male"
});
console.log(result);

//4
var result = characters.filter((e) => {
  console.log(e.gender === "female");
  return e.gender === "female"
});
console.log(result);

//SORT
// var characters = [...characters]
// var characters = characters.slice()
// console.log(characters);

//1
var result = characters.slice().sort((a,b) => {
    return a.name.localeCompare(b.name)
});
console.log(result);
console.log(characters);

//2
var result = characters.slice().sort((a,b) => {
  return a.mass - b.mass
});
console.log(result);
console.log(characters);

//3
var result = characters.slice().sort((a,b) => {
  return a.height - b.height
});
console.log(result);
console.log(characters);

//4
var result = characters.slice().sort((a,b) => {
  return a.gender.localeCompare(b.gender)
});
console.log(result);
console.log(characters);

//EVERY
//1
var result = characters.every((e) => {
    return e.eye_color === "blue"
});
console.log(result);

//2
var result = characters.every((e) => {
  return e.mass > 40
});
console.log(result);

//3
var result = characters.every((e) => {
  return e.height < 200
});
console.log(result);

//4
var result = characters.every((e) => {
  return e.gender === "male"
});
console.log(result);

//SOME
//1
var result = characters.some((e) => {
  return e.gender === "male"
});
console.log(result);

//2
var result = characters.some((e) => {
  return e.eye_color === "blue"
});
console.log(result);

//3
var result = characters.some((e) => {
  return e.height > 200
});
console.log(result);

//4
var result = characters.some((e) => {
  return e.mass < 50
});
console.log(result);