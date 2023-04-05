const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  return nums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  return nums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (word) => {
  return word.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (word) => {
  return word.sort((a, b) => b.localeCompare(a));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (product) => {
  return product.sort((a, b) => a.name.localeCompare(b.name));
};

// sort products by price, ascending order
const sortProductPriceA = (price) => {
  return price.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (price) => {
  return price.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (priceName) => {
  return priceName.sort((a, b) => a.price - b.price).sort();
};

// sort catArt by designed by
const catArtSortDesginedByA = (art) => {
  return art.sort((a, b) => a.designedBy.localeCompare(b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = (price) => {
  return price.sort((a, b) => {
    let p1;
    let p2;
    if (typeof a.price === "string" && a.price.includes("♇♇")) {
      p1 = a.price.slice(2) * 10;
    } else {
      p1 = Number(a.price);
    }
    if (typeof b.price === "string" && b.price.includes("♇♇")) {
      p2 = b.price.slice(2) * 10;
    } else {
      p2 = Number(b.price);
    }
    return p1 - p2;
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
const mySortFunction = (array) => {
  let x;

  for (let i = array.length; i > 0; i--) {
    x = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        x = false;
      }
    }
    if (x) break;
  }
  return array;
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
