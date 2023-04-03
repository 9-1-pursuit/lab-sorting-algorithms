/* 
    INSERTION SORT
        There is a portion of the array that is sorted and the other that is unsorted. So you have to compare the elements from the unsorted portion one by one and insert them into the sorted portion in the correct order
         for(let i = 1; i < arr.length;i++){
        console.log("i", i)
        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){
            console.log("j", j)
            //value comparison using ascending order.
            if(arr[j + 1] < arr[j]){
                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
            }
            console.log("arr", arr)
        }
    };

  return arr;

    MERGE SORT
        Merge sort uses the divide and conquer technique. The main concept of merge sort is that an array of length 1 is sorted. The task, therefore, lies in splitting the array into subarrays of size 1 and then merge them appropriately so that it comes up with the sorted array.
            [A,B]

    QUICKSORT
        Quicksort applies the divide and conquer technique as well. It works by having a pivot element such that the elements to the left of it are less than it and those to the right are greater than it. The pivot element can be any element in the array.
*/

const array = [9,-3,5,2,6,8,-6,1,3]

function mySort(arr) {
    if(arr.length <= 1){
        return arr
    }
    // value to be compared to other values in array, will then be 'centered in return array
   const middle= arr[0]
   const [left, right] = arr.reduce((acc, el, index) => {
    // index > 0 since compare value is index 0 start comparing at index 1
    if(index > 0){
        const accIndex = el > middle ? 1 : 0
        acc[accIndex].push(el)
    }
    return acc
   },[[],[]])
//    console.log([...left, ...right])
   return [...mySort(left), middle, ...mySort(right)]
//    const leftSort = mySort(left)
//    const rightSort = mySort(right)
//    return leftSort.concat(rightSort)
//    console.log(mySort(left))
//    console.log(mySort(right))
}

console.log(mySort(array))