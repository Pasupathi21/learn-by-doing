/**
 * @description Using constructor function handled the grouping values
 * key should be strng type
 */

const { grpValue } = require("./data/dummy-data-two");
console.log("Data", grpValue);

function GroupBy(value, keyname) {
  return value.reduce(function (pre, cur) {
    Object.keys(pre).includes(String(cur[keyname]))
      ? pre[cur[keyname]].push(cur)
      : (pre[cur[keyname]] = [cur]);
    return pre;
  }, {});
}

const groupedValues = new GroupBy(grpValue, "Value");
console.log("Group By", groupedValues);
