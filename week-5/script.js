const tanay = { mother: "mother name", age: 30 };
const tanvi = { ...tanay, age: tanay.age - 4 };

console.log(tanay, tanvi);

const colors1 = ["red", "orange", "pink", "black", "white"];
const colors2 = [...colors1, "blue", "yellow"];

const birthday = (person) => ({ ...person, age: person.age + 1 });
console.log(birthday({ name: "tanay", age: 30 }));

const numArray = [2, 5, 8, 9, 10, 15, 25];
const lessThan10 = (num) => num < 10;
console.log(numArray.filter(lessThan10));

const numIncrement2 = numArray.map((x) => x + 2);
console.log(numIncrement2);

const numberObject2 = numArray.map((num) => ({ number: num }));
console.log(numberObject2);

const numberObject = numArray.map((num, index) => ({
  Number: num,
  index: index,
}));

console.log(numberObject);

const reduceFunc = numArray.reduce((acc, curr) => acc + curr);

console.log(reduceFunc);

const sumOFfNumLessThan10 = numArray.reduce((acc, curr) => {
  if (curr < 10) return acc + curr;
  else return acc;
}, 0);

console.log(sumOFfNumLessThan10);

const givenArray = [1, 3, 5, 2, 22, 11, 9];
const sumOFOddNumber = givenArray.reduce((acc, curr) => {
  if (curr % 2 != 0) return acc + curr;
  else return acc;
}, 0);

console.log(sumOFOddNumber);

const sumOFOddNumberAndEven = givenArray.reduce(
  (acc, curr) => {
    if (curr % 2 != 0) return { ...acc, oddSum: acc.oddSum + curr };
    else return { ...acc, evenSum: acc.evenSum + curr };
  },
  { oddSum: 0, evenSum: 0 }
);
console.log(sumOFOddNumberAndEven);

const nameWithStatement = (userName) => (statement) =>
  `${userName} say's ${statement}`;

console.log(nameWithStatement("Tanay")("Hello"));

const nameFunction = (statement) => `Tanay says ${statement}`;
const idFunction = (statement) => `ID:123 says ${statement}`;

const composFunction = (statement) =>
  `${nameFunction(statement)} ${idFunction(statement)}`;

console.log(composFunction("mk"));

// Home work questions

console.log(numArray);

const ownReduce = (arr, intial) => {
  for (item in arr) {
    if (arr[item] % 2 != 0) intial = intial + arr[item];
    else intial;
  }
  return intial;
};

console.log(ownReduce(numArray, 0));

// Akansha functional programming session

const arr2 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const addOneForEven = arr2.map((ele) => (ele % 2 === 0 ? ele + 1 : ele));

console.log(addOneForEven);

const arr3 = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

const allAge = arr3.reduce((acc, curr) => acc + curr.age, 0);

console.log(allAge);

const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

const haveCyclePeople = family
  .filter((el) => el.haveCycle)
  .map((el) => el.name);

// const haveCyclePeopleOnlyFilter = family.filter(
//   (el) => (el.haveCycle && true).name
// );

// console.log(haveCyclePeopleOnlyFilter);

console.log(haveCyclePeople);

const haveCyclePeopleReduce = family.reduce(
  (acc, curr) => (curr.haveCycle ? [...acc, curr.name] : acc),
  []
);

console.log(haveCyclePeopleReduce);

const arr4 = ["You", "all", "are", "rockstars"];

const arrayWithObject = arr4.reduce(
  (acc, curr, currIndex) => ({ ...acc, [currIndex]: curr }),
  {}
);

console.log(arrayWithObject);

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

const vibgyorConcat = arr.join("-");

console.log(vibgyorConcat);

const input = [
  ["a", "b", "c"],
  ["c", "d", "e"],
  ["e", "d", "f"],
];

console.log(input.reduce((acc, curr) => [...acc, ...curr], []));

const arr5 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const numberLessThan8andEven = arr5.reduce(
  (acc, curr) => (curr <= 8 && curr % 2 === 0 ? [...acc, curr] : acc),
  []
);

console.log(numberLessThan8andEven);

const arr6 = ["eat", "sleep", "repeat", "code"];

const wordsMoreThan5Chars = arr6.filter((word) => word.length > 5);

console.log(wordsMoreThan5Chars);

const arr7 = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const sumOfNumGreaterThan50 = arr7.reduce(
  (acc, curr) => (curr > 50 ? acc + curr : acc),
  0
);

console.log(sumOfNumGreaterThan50);

const arr8 = [1, 2, 3, 7, 5, 6, 8, 9];

const productOfEvenNumbers = arr8.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc * curr : acc),
  1
);

console.log(productOfEvenNumbers);

const arr9 = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];

const addType = arr9.map((item) =>
  item.name.length > 5
    ? { ...item, type: "vegetable" }
    : { ...item, type: "fruit" }
);

console.log(addType);

const inventory = [
  { name: "fans", quantity: 3 },
  { name: "chimneys", quantity: 0 },
  { name: "bulbs", quantity: 5 },
  { name: "stove", quantity: 1 },
];

const inventoryQuantityLessThan2 = inventory.filter(
  (item) => item.quantity < 2
);

console.log(inventoryQuantityLessThan2);

const totalQuantityOfItem = inventory.reduce(
  (acc, curr) => acc + curr.quantity,
  0
);

console.log(totalQuantityOfItem);

const inventoryWhoseQuantityZero = inventory.filter(
  (item) => item.quantity === 0
);

console.log(inventoryWhoseQuantityZero);

const num = 24345687;

//2-23456-87

const separateEvenByHyphen = num
  .toString()
  .split("")
  .reduce((acc, curr, index, arr) => {
    if (arr[index - 1] % 2 === 0 && curr % 2 === 0) acc = [...acc, "-", curr];
    else acc = [...acc, curr];
    return acc;
  }, [])
  .join("");

console.log(separateEvenByHyphen);

const convertUpper = (str) => str.toUpperCase();

console.log(convertUpper("neog"));

const vowelsUppercase = (str) =>
  str
    .split("")
    .map((letter) =>
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
        ? letter.toUpperCase()
        : letter
    )
    .join("");

console.log(vowelsUppercase("neog"));

console.log(
  input
    .reduce((acc, curr) => [...acc, ...curr], [])
    .reduce((acc, curr) => {
      if (acc[`${curr}`] && acc[`${curr}`]++) acc = { ...acc };
      else acc = { ...acc, [curr]: 1 };
      return acc;
    }, {})
);

const arr10 = [1, 2, 3, 52, 20, 7, 5, 6, 8, 9, 10];

// sub of odd indices

const sumOfOddIndices = arr10.reduce((acc, curr, index) => {
  if (index % 2 !== 0) return acc + curr;
  else return acc;
}, 0);

const maxNoOfArray = arr10.reduce((acc, curr) => {
  if (curr > acc) return (acc = curr);
  else return acc;
}, 0);

console.log(maxNoOfArray);

const divBy10 = arr10.filter((item) => item % 10 === 0);

console.log(divBy10);

const evenIncBy1AndOddDecBy1 = arr10.map((item) =>
  item % 2 === 0 ? item + 1 : item - 1
);

console.log(evenIncBy1AndOddDecBy1);

const arr11 = ["apple", "orange", "mango", "papaya", "lemon"];

const stringWithVowels = arr11.filter(
  (item) =>
    item.includes("a") ||
    item.includes("e") ||
    item.includes("i") ||
    item.includes("e") ||
    item.includes("u")
);

console.log(stringWithVowels);

const strObj = arr11.reduce((acc, curr) => {
  return { ...acc, [curr]: curr.length };
}, {});

console.log(strObj);

const oneFunction =
  (...funcs) =>
  (num) =>
    funcs.reduce((acc, curr) => curr(acc), num);

const increment = (num) => num + 1;
const square = (num) => num * num;
const numMinus = (num) => num - 1;

const callAll = oneFunction(increment, square, numMinus, square)(2);
console.log(callAll);

//https://mahogany-agenda-0a7.notion.site/FP-ES6-Practice-Exercises-39de414698884a408e4d24af1637a25b

//Akansha func program question link
