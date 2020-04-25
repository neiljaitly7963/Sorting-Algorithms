function quickSort(array, start, end) {
  if (start < end) {
    var pointer = start;
    var pivot = array[end];
    while (array[pointer] !== pivot) {
      var removedElement = [];
      if (array[pointer] > pivot) {
        removedElement = array.splice(pointer, 1);
        array.splice(array.indexOf(pivot) + 1, 0, removedElement[0]);
      } else {
        pointer = pointer + 1;
      }
    }
    quickSort(array, start, array.indexOf(pivot) - 1);
    quickSort(array, array.indexOf(pivot) + 1, end);
    start = start - 1;
    end = end + 1;
  } else {
    return;
  }
}
var array = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(array);
quickSort(array, 0, array.length - 1);
console.log(array);
