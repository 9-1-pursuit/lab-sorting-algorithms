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

  return someWords.sort((a, b) => b.localeCompare(a))
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort((a, b) => a.name.localeCompare(b.name))
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort((a, b) => a.price - b.price)
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort((a, b) => b.price - a.price)
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return someProducts.sort((a, b) => a.price - b.price).sort()
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a,b) => 
  a.designedBy.localeCompare(b.designedBy)
  );
}

// sort catArt by price
const catArtSortByPriceA = (catArt) => {}
//   let catArtPrice = catArt.map((p)=>{if(typeof(p.price) === "string" && p.price.includes(`♇♇`)){
//   const artPrice = Number(p.price.slice(2))
//   return artPrice * 10
// } else {
//   return p.price }})
// });

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = () => {};

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
