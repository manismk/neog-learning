// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

let aloo = 1;
if (aloo === 1) {
  let a = 2;
  console.log(a);
}
console.log(aloo);

// var multiply = function(x, y) {
//   return x * y;
// };

const multiply = (x, y) => x * y;

// var customer = {
//   name: "Bhaalo"
// };
// var card = {
//   amount: 20,
//   product: "Aaalo",
//   unitprice: 50
// };
// var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

const customer = {
  name: "Bhaalo",
};
const card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50,
};
const message = `Hello  ${customer.name}  wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`;

// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];

var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
const [CEO, , Mentor] = Neog;

// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

const arr = ["MA", "TA", "PA", "CA"];
[firstName, surname] = arr;
console.log(firstName);
console.log(surname);

// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

const Aaloo = "Tasty";
const Bhaloo = "Cute";
var Obj = { Aaloo, Bhaloo };

// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and n0t ${2 * a + b}.`);

// var arithmeticsObj = {
//   sum: function sum(num1, num2) {
//     return num1 + num2;
//   },
//   multiply: function multiply(num1, num2) {
//     return num1 * num2;
//   }
// };

const arithmeticsObj = {
  sum: (num1, num2) => num1 + num2,
  multiply: (num1, num2) => num1 * num2,
};

// var avengers = {
//   operation: "Assemble",
//   members: [
//     {
//       ironMan: "Tony Stark"
//     },
//     {
//       captainAmerica: "Steve Rogers"
//     },
//     {
//       blackWidow: "Natasha Romanoff"
//     }
//   ]
// };
// var operation = avengers.operation,
//   members = avengers.members;

const avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark",
    },
    {
      captainAmerica: "Steve Rogers",
    },
    {
      blackWidow: "Natasha Romanoff",
    },
  ],
};
// const { operation, members } = avengers;

// const packIt1 = (...args) => console.log(args)

// packIt1(1,2,3,5,5)

const packIt = function () {
  console.log(arguments);
};

packIt(1, 2, 3, 5, 5);

const hello = () => "Hello";
const welcome = () => "Welcome";
const [Hello = hello(), Welcome = welcome()] = ["Namaste"];
console.log(Hello, Welcome);

const obj = {
  aloo: 1,
  bhallo: 2,
};

//const { c: aloo = [2, 3, 4].push(5), aloo } = obj;
//error because aloo already declared

console.log(aloo);

//Build Question

console.clear();

//Function- easy 1

const power = (x, y) => {
  let power = 1;
  for (let i = 0; i < y; i++) power = power * x;
  return power;
};
console.log(power(2, 4));

const areaOfHexagon = (length) => 2.59808 * length * length;

console.log(areaOfHexagon(45));

const noOfWords = (sentence) => sentence.split(" ").length;
console.log(noOfWords("We are NeoGrammers"));

// const findMin = (...arr) => {
//   let min =  ;
//   arr.reduce((acc, cur) => {
//     if (cur < min) min = cur;
//     return min;
//   }, min);
//   return min;
// };

const findMin2 = (...arr) => Math.min(...arr);

console.log(findMin2(3, 5, 1.8, -6));
const findMax = (...arr) => Math.max(...arr);

console.log(findMax(3, 5, 1.8, -6));

const typeOfTriangle = (side1, side2, side3) => {
  if (side1 + side2 + side3 !== 180) return "Not a Triangle";
  else if (side1 === 60 && side2 === 60 && side3 === 60)
    return "Equilateral Triangle";
  else if (side1 !== side2 && side2 !== side3 && side3 !== side1)
    return "Scalane Triangle";
  else return "Isosceles Triangle";
};

console.log(typeOfTriangle(30, 60, 90));

//Function- medium

console.clear();

const arrayLength = (arr) => {
  return arr.reduce((acc) => {
    acc++;
    return acc;
  }, 0);
};

console.log(arrayLength([1, 5, 3, 7, 8, 22, 54, 58, 5, 5, 2, 2]));

const indexOf = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
};

console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

const replace = (arr, replaceThis, replaceTo) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === replaceThis) arr[i] = replaceTo;
  }
  return arr;
};

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

const mergeArray = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
};

console.log(mergeArray([1, 3, 5], [8, 52, 4, 6]));

const charAt = (givenString, index) => {
  for (let i = 0; i < givenString.length; i++) {
    if (i === index) return givenString[i];
  }
};

console.log(charAt("neoGcamp", 4));

const minDate = (date1, date2) => {
  const splitedDate1 = date1.split("/");
  const splitedDate2 = date2.split("/");
  const convertedDate1 = new Date(
    splitedDate1[2],
    splitedDate1[1] - 1,
    splitedDate1[0]
  );
  const convertedDate2 = new Date(
    splitedDate2[2],
    splitedDate2[1] - 1,
    splitedDate2[0]
  );
  if (convertedDate1 - convertedDate2 < 0) return date1;
  else return date2;
};
console.log(minDate("02/05/1980", "24/01/2000"));

// prettier-ignore
const alaphabetArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const encodeString = (givenString, shiftnumber) => {
  let encodedString = [];
  for (let i = 0; i < givenString.length; i++) {
    let findindex = indexOf(alaphabetArr, givenString[i]);

    findindex =
      findindex + shiftnumber >= alaphabetArr.length
        ? (findindex = findindex + shiftnumber - alaphabetArr.length)
        : findindex + shiftnumber;

    encodedString.push(charAt(alaphabetArr, findindex));
  }
  return encodedString.join("");
};

console.log(encodeString("neogcamp", 2));

const toSentenceCase = (givenString) =>
  givenString
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(toSentenceCase("we are neoGrammers"));

const reverseCharactersOfWord = (givenString) =>
  givenString
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

console.log(reverseCharactersOfWord("we are neoGrammers"));
