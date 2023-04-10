const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
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
  return someProducts
    .sort((a, b) => a.price - b.price)
    .sort((a, b) => a.name - b.name);
};

// sort catArt by designedBy
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) =>
    a.designedBy.toLowerCase().localeCompare(b.designedBy.toLowerCase())
  );
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  return catArt.sort((a, b) => {
    let aPrice;
    let bPrice;
    if (typeof a.price === "string" && a.price.includes("♇♇")) {
      //* conversion here
      aPrice = a.price.slice(2) * 10;
    } else {
      aPrice = Number(a.price);
    }
    if (typeof b.price === "string" && b.price.includes("♇♇")) {
      //* conversion here
      bPrice = b.price.slice(2) * 10;
    } else {
      bPrice = Number(b.price);
    }
    return aPrice - bPrice;
    // ternary => 
  });
};

// Create your own sort function
// It should sort in ascending order
// It should work for numbers or words (case sensitive)
// Create your own sort algorithm
// or try to implement bubble sort
//! or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (someNums) => {
  //* someNums =  [10,9,8,7,6,5,4,3,2,1,0]
// base case 
if(someNums.length === 1) {return someNums
}

// divide length of nums array in half
const median = Math.floor(someNums.length / 2) 
// left side 
const left = someNums.slice(0, median) // [10,9,8,7,6]
//right side 
const rigth =  someNums.slice(median) // [5,4,3,2,1,0]

// recursively sort 
const sortedLeft = mySortFunction(left)
const sortedRigth = mySortFunction(rigth)

return merge(sortedLeft,sortedRigth) //

// Merge function 
function merge(left, right) {



  
}



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
