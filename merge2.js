function merge(unsortedArray) {
  //Base condition
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);
  return mergeLogic(merge(left), merge(right));
}

//Function for merging
function mergeLogic(left, right) {
  let array = [];
  let arrayIndex = 0;
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[arrayIndex] = left[leftIndex];
      leftIndex = leftIndex + 1;
      arrayIndex = arrayIndex + 1;
    }
    if (right[rightIndex] < left[leftIndex]) {
      array[arrayIndex] = right[rightIndex];
      rightIndex = rightIndex + 1;
      arrayIndex = arrayIndex + 1;
    }
  }
  //Runs only when left array has elements remaining
  while (leftIndex < left.length) {
    array[arrayIndex] = left[leftIndex];
    leftIndex = leftIndex + 1;
    arrayIndex = arrayIndex + 1;
  }
  //Runs only when right array has elements remaining
  while (rightIndex < right.length) {
    array[arrayIndex] = right[rightIndex];
    rightIndex = rightIndex + 1;
    arrayIndex = arrayIndex + 1;
  }
  //Returns the merged array
  return array;
}

var A = [3, 2, 1, 4];
console.log(merge(A));
