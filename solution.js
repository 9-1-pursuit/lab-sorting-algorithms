const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// Pluto Coin ♇♇ - the current market rate of Pluto Pluto Coin is $10 for one coin.


// sort numbers in ascending order
const sortNumsA = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  return sortNumsA(arr).reverse()
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      const a = arr[j].charCodeAt(0)
      const b = arr[j+1].charCodeAt(0)

      if (a > b) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      const a = arr[j].toLowerCase().charCodeAt(0)
      const b = arr[j+1].toLowerCase().charCodeAt(0)

      if (a < b) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};


// sort products by name, ascending order case insensitive
const sortProductNamesA = (arrOfObj) => {
    do {
      swapped = false;
      for (let i = 0; i < arrOfObj.length-1; i++) {
        const a = arrOfObj[i].name.toLowerCase().charCodeAt(0)
        const b = arrOfObj[i+1].name.toLowerCase().charCodeAt(0)

        if (a > b) {
          [arrOfObj[i], arrOfObj[i + 1]] = [arrOfObj[i + 1], arrOfObj[i]];
          swapped = true;
        }
      }
    } while (swapped);

  return arrOfObj;
  
};

// sort products by price, ascending order
const sortProductPriceA = (arrOfObj) => {
  let noSwap;
  for (let i = arrOfObj.length; i > 0; i--){
    noSwap = true
    for (let j = 0; j < i - 1; j++){
      const a = arrOfObj[j].price
      const b = arrOfObj[j+1].price

      if(a > b){
        [arrOfObj[j], arrOfObj[j+1]] = [arrOfObj[j+1], arrOfObj[j]]
        noSwap = false
      }
    }
    if(noSwap) break;
  }
  return arrOfObj
};

// sort products by price, descending order
const sortProductPriceD = (arrOfObj) => {
  let noSwap;
  for (let i = arrOfObj.length; i > 0; i--){
    noSwap = true
    for (let j = 0; j < i - 1; j++){
      const a = arrOfObj[j].price
      const b = arrOfObj[j+1].price

      if(a < b){
        [arrOfObj[j], arrOfObj[j+1]] = [arrOfObj[j+1], arrOfObj[j]]
        noSwap = false
      }
    }
    if(noSwap) break;
  }
  return arrOfObj

};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arrOfObj) => {
  let noSwap;
  for (let i = arrOfObj.length; i > 0; i--){
    noSwap = true
    for (let j = 0; j < i - 1; j++){
      const a = arrOfObj[j].price
      const b = arrOfObj[j+1].price

      if(a > b){
        [arrOfObj[j], arrOfObj[j+1]] = [arrOfObj[j+1], arrOfObj[j]]
        noSwap = false
      }
      else if(a === b){
        let index = 0
        let letterA 
        let letterB 
        while(letterA === letterB){
          letterA = arrOfObj[j].name[index]
          letterB = arrOfObj[j + 1].name[index]
          index++
        }
        if(letterA.toLowerCase().charCodeAt(0) > letterB.toLowerCase().charCodeAt(0)){
          [arrOfObj[j], arrOfObj[j + 1]] = [arrOfObj[j + 1], arrOfObj[j]]
          noSwap = false
        }
      }
    }
    if(noSwap) break;
  }
  return arrOfObj
};
console.log(sortProducsPriceNameA(someProducts))

// sort catArt by designed by
const catArtSortDesginedByA = () => {};

// sort catArt by price
const catArtSortByPriceA = () => {};

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
