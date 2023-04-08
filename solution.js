const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  return arr.sort((a, b) => {
    if(a > b) return 1
    else return -1
  })
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  return arr.sort((a,b) => {
    if(a < b) return 1
    else return -1
  })
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  return arr.sort()
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  return arr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return 1
    else if (a.toLowerCase() > b.toLowerCase()) return -1
  })
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  return arr.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
    else return 1
  })
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  return arr.sort((a, b) => {
    if (a.price < b.price) return -1
    else return 1
  }) 
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  return arr.sort((a, b) => {
    if (a.price < b.price) return 1
    else if (a.price > b.price) return -1
  }) 
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  return arr.sort((a, b) => {
    if (a.price < b.price) return -1
    else if (a.price > b.price) return 1

    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
    else return 1
  }) 
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  return arr.sort((a, b) => {
    if (a.designedBy.toLowerCase() < b.designedBy.toLowerCase()) return -1
    else if (a.designedBy.toLowerCase() > b.designedBy.toLowerCase()) return 1
  })
}

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  return arr.sort((a, b) => {
    let priceA
    let priceB

    if (isNaN(a.price) && a.price.includes('♇♇')){
      priceA = Number(a.price.slice(2)) * 10
    } else priceA = a.price

    if (isNaN(b.price) && b.price.includes('♇♇')){
      priceB = Number(b.price.slice(2)) * 10
    } else priceB = b.price
    
    if (priceA < priceB) return -1
    else return 1
  }) 
};

console.log(catArtSortDesginedByA(catArt))

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
