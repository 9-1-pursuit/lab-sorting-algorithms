const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) return 1
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

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

const mySortFunction = (arr) => {
  // initialize variable for storing sorted array and push the first element of arr
  const sortedArr = []
  sortedArr.push(arr[0])
  
  // looping through arr starting at arr[1]...
  for (let i = 1; i < arr.length; i++){
    // declare a variable to track whether an element has found the correct position in sortedArr
    // reset found as false for each for loop iteration
    let found = false

    // do the following while found is not true
    do {
      // start at position 0 to compare arr elements to sortedArr elements
      let position = 0
      
      // if element is less than or equal to the comparison sortedArr element and greater than or equal to the previous element,
      // splice element into sortedArr at [position] and set found to true to break out of the do while loop
      // OR statement in case sortedArr[position - 1] does not exist
      if (arr[i] <= sortedArr[position] && (arr[i] >= sortedArr[position - 1] || !sortedArr[position - 1])){
        sortedArr.splice(position, 0, arr[i])
        found = true
      
      // otherwise if element is greater than or equal to the comparison sortedArr element and less than or equal to the following element,
      // splice element into sortedArr at [position + 1] and set found to true to break out of the do while loop
      // OR statement in case sortedArr[position + 1] does not exist      
    } else if (arr[i] >= sortedArr[position] && (arr[i] <= sortedArr[position + 1] || !sortedArr[position + 1])){
        sortedArr.splice(position + 1, 0, arr[i])
        found = true
      }
      // if conditions above are not met, increment the position and continue searching for matching condition
      position++
      // break out of the while loop when the correct position is found
    } while (!found)
  }
  // return the sorted array
  return sortedArr
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
