const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort((a, b) => a - b)
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort((a, b) => b - a)
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort()
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort((a, b) => b.localeCompare(a, undefined, {determinant: "base"}))
  //This is not cute but it is O(n log n) so ignore. 
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
   return someProducts.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
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
  //its going to be ugly but let me land lol
  return someProducts.sort((a, b) => {
    // If the price of product 'a' is equal to the price of product 'b'
    if (a.price === b.price) {
      // Compare the 'name' of the two products, and return the result
      return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
    }
    // Otherwise, sort the products by price in ascending order
    return a.price - b.price;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) => a.designedBy.localeCompare(b.designedBy, undefined, {sensitivity: "base"}));
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

/*
const catArtSortByPriceA = (arr) => { // Define function catArtSortByPriceA that takes an array as an argument
  return arr.sort( // Call the sort method on the array, which will sort it in place
    (a, b) => // The sort method takes a comparison function that compares two elements of the array
      (a.price.toString().includes("♇♇") // If the price of the first element includes "♇♇"
        ? +a.price.replace("♇♇", "") * 10 // Convert the price to a number and multiply by 10
        : a.price) // Otherwise, use the price as is
      - // Subtract the second element's price from the first element's price
      (b.price.toString().includes("♇♇") // Repeat the above steps for the second element
        ? +b.price.replace("♇♇", "") * 10
        : b.price)
  );
};
optimized version fails test asks why later. 
*/ 

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr, order = "asc") => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        (order === "asc" && arr[j] > arr[j + 1]) ||
        (order === "desc" && arr[j] < arr[j + 1])
      ) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
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
