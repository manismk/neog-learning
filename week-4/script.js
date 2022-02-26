// Exercise - 1 to 4
function strName(name, func) {
  func(name.length);
}

strName("Manikandan", (length) => {
  console.log(`OMG my name is ${length} long`);
});

function willThanosKillMe(name, success, fail) {
  if (name.length % 2 === 0) {
    success();
  } else {
    fail();
  }
}

willThanosKillMe(
  "Manikandan",
  () => {
    console.log("yes I am Alive");
  },
  () => {
    console.log(`Give my headphones to sister`);
  }
);

function delayMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayMessage("Tanay is more energetic today", 3000);

//Exercise 9

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}

//Exercise 11,12,13
fakeFetch("mk")
  .then((sucess) => {
    console.log(sucess);
  })
  .catch((e) => {
    console.error(e);
  });

fakeFetch("Hello")
  .then((str) => str.length)
  .then((len) => console.log(len))
  .catch((e) => console.log(e));

const getServerResponseLength = (str) =>
  fakeFetch(str).then((res) => res.length);

getServerResponseLength("helloMk").then((res) => console.log(res));

const syncCall = (msg1, msg2) => {
  fakeFetch(msg1).then((res) => {
    console.log(res);
    fakeFetch(msg2).then((res2) => console.log(res2));
  });
};

//Exercise -15
const asyncCall = async () => {
  try {
    const data = await fakeFetch("Tanay");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

//Exercise-16
const asyncWaterFall = async (msg1, msg2) => {
  try {
    const data = await fakeFetch(msg1);
    console.log(data);
    const data2 = await fakeFetch(msg2);
    console.log(data2);
  } catch (err) {
    console.log(err);
  }
};

syncCall("tanay", "pratap");

asyncCall();

asyncWaterFall("tanay", "pratap");

// Home works

// set interval exercise 6

const messagedelay = (message, delay) => {
  setInterval(() => {
    console.log(message);
  }, delay);
};

// messagedelay("Mani", 0);

const countDown = (number) => {
  console.log(number);
  const clearId = setInterval(() => {
    number--;
    if (number === 0) {
      console.log("Bang Bang");
      clearInterval(clearId);
    } else {
      console.log(number);
    }
  }, 1000);
};

countDown(5);

// exercise -7

// React code https://codesandbox.io/s/week-4-tany-hw-nv5yg?file=/src/App.js

//get response length async

const getServerResponseLengthAsync = async (str) => {
  const res = await fakeFetch(str);
  return res.length;
};
getServerResponseLengthAsync("hellomk").then((res) =>
  console.log(`132 ${res}`)
);

//Parallel calls

// async function parallel() {
//   var a = sleep();
//   var b = sleep();
//   await a;
//   await b;
// }

const parallelCalls = async () => {
  let firstCall = fakeFetch("First");
  let SecondCall = fakeFetch("Second");

  try {
    const data1 = await firstCall;
    const data2 = await SecondCall;
    console.log(data1, data2);
  } catch (e) {
    console.log(e);
  }
};
