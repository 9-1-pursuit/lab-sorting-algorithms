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
const mySortFunction = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (typeof arr[j] === 'number' || typeof arr[j] === 'bigint') {
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      } else if (typeof arr[j] === 'string') {
        if (arr[j].toLowerCase().localeCompare(arr[j+1].toLowerCase()) > 0) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      } else {
        throw new Error('Invalid input type. Only numbers and strings are allowed.');
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
//! Check for String and Nums => only works for nums ATM -__- 
// const mySortFunction = (arr) => {
//   //* someNums =  [10,9,8,7,6,5,4,3,2,1,0]
// // base case 
// if(arr.length === 1) {return arr
// }
// // divide length of nums array in half
// const median = Math.floor(arr.length / 2) 
// // left side 
// const leftSide = arr.slice(0, median) // [10,9,8,7,6]
// //right side 
// const rigthSide =  arr.slice(median) // [5,4,3,2,1,0]
// // recursively sort 
// const sortedLeft = mySortFunction(leftSide)
// const sortedRigth = mySortFunction(rigthSide)

// return merge(sortedLeft,sortedRigth) //

// // Merge function 
// function merge(left, right) {

// let finalMerge = [] // to comapre elements left and right, then add them to the finalMerge array
// let leftIndex = 0 
// let rightIndex = 0 

// while(leftIndex < leftIndex.length && rightIndex < rightIndex.length){
//   if(left[leftIndex] < right[rightIndex]){
//     finalMerge.push(left[leftIndex])
//    leftIndex++ // move to next index in the leftSide till end
//   }
//   else{
// finalMerge.push(right[rightIndex])
// rightIndex++ 
//   }
//   // console.log(finalMerge) // [empty] ?????
//   // Add Remaining element in left to the final merge arr
//   while(leftIndex < left.length){
// finalMerge.push(left[leftIndex])
// leftIndex++ 
//   }
//   // Add Remaining element in right to the final merge arr
// while(rightIndex< right.length){
//   finalMerge.push(right[rightIndex])
//   rightIndex++
// }
// }
// // console.log("Final", finalMerge.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)))  //
// const result = finalMerge.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// return result //

// }
// };
