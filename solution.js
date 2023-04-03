const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ASCENDING order
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

// sort numbers in DESCENDING order
const sortNumsD = (arr) => {
  return sortNumsA(arr).reverse()
};

// sort words in ASCENDING order CASE SENSITIVE
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

// sort words in DESCENDING order CASE INSENSITIVE
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


// sort products by name, ASCENDING order CASE INSENSITIVE
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

// sort products by price, ASCENDING order
const sortProductPriceA = (arrOfObj, val = "asc") => {
  let noSwap;
  for (let i = arrOfObj.length; i > 0; i--){
    noSwap = true
    for (let j = 0; j < i - 1; j++){
      const a = arrOfObj[j].price
      const b = arrOfObj[j+1].price

      if(val === "asc"){
        if(a > b){
          [arrOfObj[j], arrOfObj[j+1]] = [arrOfObj[j+1], arrOfObj[j]]
          noSwap = false
        }
      } 
      if( val === "desc"){
        if(a < b){
          [arrOfObj[j], arrOfObj[j+1]] = [arrOfObj[j+1], arrOfObj[j]]
          noSwap = false
        }
      }
    }
    if(noSwap) break;
  }
  return arrOfObj
};

// sort products by price, DESCENDING order
const sortProductPriceD = (arrOfObj) => {
  return sortProductPriceA(arrOfObj, "desc")
};

// sort products by price, then by name, ASCENDING order
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

// sort catArt by designed by ASCENDING
const catArtSortDesginedByA = (arrOfObj) => {
  let noSwap;
  for (let i = arrOfObj.length; i > 0; i--){
    noSwap = true
    for (let j = 0; j < i - 1; j++){
      let a = arrOfObj[j].designedBy.toLowerCase().charCodeAt(0)
      let b = arrOfObj[j+1].designedBy.toLowerCase().charCodeAt(0)
      if(isNaN(a) || isNaN(b)){
        if(isNaN(a)){
          a = 0
          b = 1
        }
        if(isNaN(b)){
          a = 1
          b = 0
        }
      }
      if(a > b){
          [arrOfObj[j], arrOfObj[j+1]] = [arrOfObj[j+1], arrOfObj[j]]
          noSwap = false
        }
    }
    if(noSwap) break;
  }
  return arrOfObj
};
// console.log("".charCodeAt(0))
// console.log(catArtSortDesginedByA(catArt))

// sort catArt by price ASCENDING
// The cat art has prices listed in dollars or the latest greatest crypto currency called Pluto Pluto Coin ♇♇ - the current market rate of Pluto Pluto Coin is $10 for one coin.
const catArtSortByPriceA = (arrOfObj) => {
  let noSwap
  for (let i = arrOfObj.length; i > 0; i--){
    noSwap = true
    for(let j = 0; j< i - 1; j++){
      let a = arrOfObj[j].price
      let b = arrOfObj[j + 1].price
      if(isNaN(+a) || isNaN(+b)){
        if(isNaN(+a)){
          a = +a.match(/[0-9]/)[0] * 10
        }
        if(isNaN(+b)){
          b = +b.match(/[0-9]/)[0] * 10
        }
      }
      if(+a > +b){
        [arrOfObj[j], arrOfObj[j+1]] = [arrOfObj[j+1], arrOfObj[j]]
        noSwap = false
      }
    }
    if(noSwap) break
  }
  return arrOfObj
};
// console.log(catArtSortByPriceA(catArt))

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

// Using Quick Sort Method w/ bonus val = "asc" || "desc"
const mySortFunction = (arr, val = "asc") => {
  if(arr.length <= 1){
    return arr
}
let middle = arr[0]
const [left, right] = arr.reduce((acc, el, index) => {
if(index > 0){
    if(isNaN(el)){
        if(el[0] === middle[0]){
            let index = 0
            let letterA 
            let letterB 
            while(letterA === letterB){
              letterA = el[index]
              letterB = middle[index]
              index++
            }
            if(letterA.toLowerCase().charCodeAt(0) > letterB.toLowerCase().charCodeAt(0)){
                el = 1
                middle = 0
            }
        }
       
    }
    const accIndex = el > middle ? 1 : 0
    acc[accIndex].push(el)
}
return acc
},[[],[]])

return val === "asc" ?
 [...mySortFunction(left), middle, ...mySortFunction(right)] : 
 [...mySortFunction(left), middle, ...mySortFunction(right)].reverse()
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
