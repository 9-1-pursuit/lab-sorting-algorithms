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
const catArtSortByPriceA = (catArt) => {
  let priceA, priceB
  return catArt.sort((a,b) =>{
    if( typeof a.price === "string" && a.price.includes("♇♇")){
      priceA = Number(a.price.slice(2)) * 10
    } else {
      priceA = Number(a.price)
    }
    if( typeof b.price === "string" && b.price.includes("♇♇")){
      priceB = Number(b.price.slice(2)) * 10
    } else {
      priceB = Number(b.price)
    }
    return priceA - priceB
  })
}

//const someNums = [7, 10, 9, 4, 0, 6, 1, 8, 3, 2, 5];

const mySortFunction = (arrData) => {
  let swapThis;
  //outer loop is descending - x = index, starts at last index
  for (let x = arrData.length - 1; x > 0; x--) {
   // console.log(arrData[x]);
    swapThis = true;
    //inner loop is ascending - y = index, starts at first index
    for (let y = 0; y < x; y++) {
      //   console.log(arrData[y], arrData[y + 1]);
      if (arrData[y] > arrData[y + 1]) {
        [arrData[y + 1], arrData[y]] = [arrData[y], arrData[y + 1]];
        swapThis = false;
      }
    }

    if (swapThis) break;
  }
  return arrData;
}
//console.log(mySortFunction(someNums))
// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order


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
