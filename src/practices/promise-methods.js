/**
 * Promise and methods
 * 1) all
 * 2) allSettled
 * 3) race
 * 4) any
 */

const API = (sec = 0, isreject = false) => {
  console.log(isreject);
  return new Promise((rs, rj) => {
    setTimeout(async () => {
      try {
        if (isreject) throw new Error("API error");
        rs(
          (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json()
        );
      } catch (error) {
        rj(error);
      }
    }, sec * 1000);
  });
};

// promise all method
const getNumOfApiCalls = (calls = 5, isreject = false) => {
  return Array(calls)
    .fill({})
    .map(async (_, i) => {
      try {
        return await API(i > 1 ? i : 1, isreject ? i % 2 !== 0 : isreject);
      } catch (err) {
        return err;
      }
    });
};
async function main(type = "all") {
  let result = null;
  let start = Date.now();
  if (type === "all") {
    result = await Promise.all(getNumOfApiCalls(10, true));
  } else if (type === "allSettled") {
    result = await Promise.allSettled(getNumOfApiCalls(10, true));
  } else if (type === "race") {
    result = await Promise.race(getNumOfApiCalls(10, true));
  } else {
    result = await Promise.any(getNumOfApiCalls(10, true));
  }
  console.log(
    `=============== ${type} | Response time: ${
      (Date.now() - start) / 1000
    }'s ===============\n`,
    result
  );
  return;
}
main("any");
