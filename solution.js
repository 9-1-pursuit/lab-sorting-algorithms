const { catArt, someNums, someProducts, someWords } = require("./data/data.js")

// sort numbers in ascending order
const sortNumsA = () => {
  const sortedNums = [...someNums]
  return sortedNums.sort((a, b) => a - b)
}

// sort numbers in descending order
const sortNumsD = () => {
  const sortedNums = [...someNums]
  return sortedNums.sort((a, b) => b - a)
}

// sort words in ascending order case sensitive
const sortWordsA = () => {
  const sortedWords = [...someWords]
  return sortedWords.sort()
}

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort((a, b) => b.localeCompare(a))
}

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort((a, b) => a.name.localeCompare(b.name))
}

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort((a, b) => a.price - b.price)
}

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort((a, b) => b.price - a.price)
}

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return someProducts.sort((a, b) => a.price - b.price).sort()
  // .sort() at the end is sorting entire results by the first key by default
}

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) => a.designedBy.localeCompare(b.designedBy))
}

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  let num1
  let num2
  return catArt.sort((a, b) => {
    if (typeof a.price === "string" && a.price.includes("♇♇")) {
      num1 = Number(a.price.slice(2)) * 10
    } else {
      num1 = Number(a.price)
    }
    if (typeof b.price === "string" && b.price.includes("♇♇")) {
      num2 = Number(b.price.slice(2)) * 10
    } else {
      num2 = Number(b.price)
    }
    return num1 - num2
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
const mySortFunction = (someNums) => {
  let noSwap
  for (let i = someNums.length - 1; i > 0; i--) {
    noSwap = true
    for (let j = 0; j < i; j++) {
      if (someNums[j] > someNums[j + 1]) {
        ;[someNums[j + 1], someNums[j]] = [someNums[j], someNums[j + 1]]
        noSwap = false
      }
    }
    if (noSwap) break
  }
  return someNums
}

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
}
