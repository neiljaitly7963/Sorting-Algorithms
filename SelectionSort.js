function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var smallest = array[i];
    for (var j = i + 1; j < array.length; j++) {
      if (smallest <= array[j]) {
      } else {
        smallest = array[j];
      }
    }
    var temp = null;
    temp = array[i];
    array[array.indexOf(smallest)] = temp;
    array[i] = smallest;
  }
}
