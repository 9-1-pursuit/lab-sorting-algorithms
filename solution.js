const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = () => {
  return someNums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = () => {
  return someNums.reverse().sort((a, b) => a + b);
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  return someWords
    .sort(function (a, b) {
      if (a.toLowerCase() === b.toLowerCase()) {
        return a.localeCompare(b);
      }
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      return 1;
    })
    .reverse();
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  return someProducts.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};
// console.log(
//   someProducts.sort(function (a, b) {
//     if (a.name.toLowerCase() < b.name.toLowerCase()) {
//       return -1;
//     }
//     if (a.name.toLowerCase() > b.name.toLowerCase()) {
//       return 1;
//     }
//     return 0;
//   })
// );
// sort products by price, ascending order
const sortProductPriceA = () => {
  return someProducts.sort((a, b) => a.price - b.price);
};
// console.log(someProducts.sort((a, b) => a.price - b.price));

// console.log(someProducts.map((P) => P.price).sort((a, b) => a - b));
// sort products by price, descending order
const sortProductPriceD = () => {
  return someProducts.sort((a, b) => b.price - a.price);
};
// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return someProducts.sort((a, b) => a.price - b.price).sort();
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) => a.designedBy.localeCompare(b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = () => {
  return catArt.sort((a, b) => {
    let priceA =
      typeof a.price === "string" && a.price.includes("♇♇")
        ? Number(a.price.slice(2)) * 10
        : Number(a.price);
    let priceB =
      typeof b.price === "string" && b.price.includes("♇♇")
        ? Number(b.price.slice(2)) * 10
        : Number(b.price);
    return priceA - priceB;
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
const mySortFunction = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
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
