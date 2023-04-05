const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  return nums.sort(function (a, b) { return a - b });
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  return nums.sort(function (a, b) { return b - a });
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  return words.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  return words.sort((a, b) => b.localeCompare(a));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (obj) => {
  return obj.sort((a, b) => a.name.localeCompare(b.name));
};

// sort products by price, ascending order
const sortProductPriceA = (obj) => {
  return obj.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (obj) => {
  return obj.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (obj) => {
  return obj.sort((a, b) => a.price - b.price).sort();
};

// sort catArt by designed by
const catArtSortDesginedByA = (obj) => {
  return obj.sort((a, b) => a.designedBy.localeCompare(b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = (obj) => {
  return obj.sort((a, b) => {
    let totalA;
    let totalB;
    if (typeof a.price === "string" && a.price.includes("♇♇")) {
      totalA = a.price.slice(2) * 10;
    } else {
      totalA = Number(a.price);
    }
    if (typeof b.price === "string" && b.price.includes("♇♇")) {
      totalB = b.price.slice(2) * 10;
    } else {
      totalB = Number(b.price);
    }
    return totalA - totalB;
  })
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
  let swap;

  for (let i = arr.length; i > 0; i--) {
    swap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swap = false;
      }
    }
    if (swap) break;
  }
  return arr;
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
