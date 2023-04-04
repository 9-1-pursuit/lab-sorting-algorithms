const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  return arr.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  return arr.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  return arr.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  return arr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return 1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    }
    return 0;
  });
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  return arr.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  return arr.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  return arr.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  return arr.sort((a, b) => {
    if (a.price === b.price) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    }
    return a.price - b.price;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  return arr.sort((a, b) => {
    if (a.designedBy < b.designedBy) {
      return -1;
    }
    if (a.designedBy > b.designedBy) {
      return 1;
    }
    return 0;
  });
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  return arr.sort(
    (a, b) =>
      (a.price.toString().includes("♇♇")
        ? +a.price.replace("♇♇", "") * 10
        : a.price) -
      (b.price.toString().includes("♇♇")
        ? +b.price.replace("♇♇", "") * 10
        : b.price)
  );
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

// code is based on Quick Sort
const mySortFunction = (arr, ord = "asc") => {
  if (arr.length < 2) {
    return arr;
  } else {
    const left = [];
    const right = [];
    const refVal = arr.pop();
    ord === "asc"
      ? arr.forEach((e) => {
          e < refVal ? left.push(e) : right.push(e);
        })
      : arr.forEach((e) => {
          e > refVal ? left.push(e) : right.push(e);
        });
    return [
      ...mySortFunction(left, ord),
      refVal,
      ...mySortFunction(right, ord),
    ];
  }
};

console.log(mySortFunction([2, 4, 3, 1, 5, 7, -1, -5, -3, 10, 12]));
console.log(mySortFunction([2, 4, 3, 1, 5, 7, -1, -5, -3, 10, 12], "asc"));
console.log(mySortFunction([2, 4, 3, 1, 5, 7, -1, -5, -3, 10, 12], "desc"));
console.log(
  mySortFunction(
    ["array", "apple", "beer", "animal", "bee", "TEST", "Good"],
    "asc"
  )
);
console.log(
  mySortFunction(
    ["array", "apple", "beer", "animal", "bee", "TEST", "Good"],
    "desc"
  )
);

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
