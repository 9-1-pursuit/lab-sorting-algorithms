const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = () => {
  return someNums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort((a, b) =>
    b.toLowerCase().localeCompare(a.toLowerCase())
  );
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return someProducts.sort((a, b) => a.price - b.price).sort();
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) =>
    a.designedBy.toLowerCase().localeCompare(b.designedBy.toLowerCase())
  );
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  return catArt.sort((a, b) => {
    let tempA;
    let tempB;
    if (typeof a.price === "string" && a.price.includes("♇♇")) {
      tempA = Number(a.price.slice(2)) * 10;
    } else {
      tempA = Number(a.price);
    }
    if (typeof b.price === "string" && b.price.includes("♇♇")) {
      tempB = Number(b.price.slice(2)) * 10;
    } else {
      tempB = Number(b.price);
    }
    return tempA - tempB;
  });
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

const merge = (left, right) => {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
};

const mySortFunction = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const left = arr.splice(0, half);
  const right = arr;

  return merge(mySortFunction(left), mySortFunction(right));
};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
