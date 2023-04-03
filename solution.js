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
  return [...catArt].sort((a, b) => {
    return catArt.map((p) => {
        if (typeof p.price === "string" && p.price.includes("♇♇")) {
          //* conversion here
          const artPrice = Number(p.price.slice(2));
          return artPrice * 10;
        } else {
          return p.price;
        }
      })
    return a - b
  });
   //!
    // let aPrice = typeof a.price === "string" && a.price.includes("♇♇");
    // if (aPrice) {
    //   let pluto = Number(a.price.slice(2));
    //   console.log(a.price, typeof pluto, pluto * 10);
    // } else {
    //   let cPrice = Number(a.price)
    //   console.log("price", cPrice, typeof cPrice);
    // }
  // convert price to number
  // return catArt.forEach((p) => {
  //   if (typeof p.price === "string" && p.price.includes("♇♇")) {
  //     //* conversion here
  //     const artPrice = Number(p.price.slice(2));
  //     return artPrice * 10;
  //   } else {
  //     return p.price;
  //   }
  // });
  // // .sort((a,b)=>
  // // a.price - b.price)
  console.log(catArt);
};
console.log(catArtSortByPriceA(catArt));
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
