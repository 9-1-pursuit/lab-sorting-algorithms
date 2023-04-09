const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  return nums.sort((a, b) => a - b)
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  return nums.sort((a, b) => b - a)
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  return words.sort()
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  return words.sort((a ,b) => {
    if (a.toLowerCase() < b.toLowerCase()) return 1
    if (a.toLowerCase() > b.toLowerCase()) return -1
  })
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (name) => {
  return name.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
    else return 1
  })
};

// sort products by price, ascending order
const sortProductPriceA = (price) => {
  return price.sort((a, b) => a.price - b.price)
};

// sort products by price, descending order
const sortProductPriceD = (price) => {
  return price.sort((a, b) => b.price - a.price)
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (both) => {
  return both.sort((a, b) => a.price - b.price).sort()
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) => {
    if (a.designedBy.toLowerCase() < b.designedBy.toLowerCase()) return -1
    else if (a.designedBy.toLowerCase() > b.designedBy.toLowerCase()) return 1
  })
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  return catArt.sort((a, b) => {
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
}

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
  // Using Quicksort method
  if (arr.length <= 1){
    return arr
    // checks if array length is 1 or less. if so then it will return the array as is
  }
  const first = arr[0] //element that will divide the array into two sub-arrays
  const leftArr = [] // empty array that will hold elements smaller than first
  const rightArr = [] // empty array that will hold element greater or equal to first

  for (let i = 1; i < arr.length; i++){
    if (arr[i] < first){
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])

    // for loop checks if each element is less than first. if so, push to leftArr. If greater or equal to, push to rightArr   
    }
  }

  return mySortFunction(leftArr).concat(first, mySortFunction(rightArr))
  // **recursive** function calls itself on sub arrays until it reaches the base case
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
