/**
 * @description Order by using only numbers
 */

const { orderby } = require("./data/dummy-data-two");

function OrderByUsingSwap(value, keyname) {
  let tempElement;
  let temprray = [];
  for (let loopOne = 0; loopOne < value.length; loopOne++) {
    const loopOneElement =
      typeof value[loopOne][keyname] === "number"
        ? value[loopOne][keyname]
        : false;
        console.log("Value", loopOneElement)
    if (loopOneElement != false) {
      for (let loopTwo = loopOne; loopTwo < value.length; loopTwo++) {
        const loopTwoElement = value[loopTwo][keyname];
        if(loopOneElement > loopTwoElement){
            tempElement = loopOneElement;
            value[loopTwo] = loopOneElement;
            value[loopOne] = tempElement;
        }
      }
    } else {
      return false;
    }
  }
  return value;
}

const orderBy = new OrderByUsingSwap(orderby, "Value");
console.log("Value >>>>>>>>>", orderBy);
