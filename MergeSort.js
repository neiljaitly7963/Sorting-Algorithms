function merge(array) {
  var n = array.length;
  var mid = 0;
  var left = [];
  var right = [];

  if (n < 2) {
    return array;
  } else {
    mid = Math.round(n / 2);
    left = array.slice(0, mid);
    right = array.slice(mid);
    return mergeLogic(merge(left), merge(right));
  }
}

function mergeLogic(left, right) {
  var array = [];
  var nleft = left.length;
  var nright = right.length;
  var k = 0;
  var i = 0;
  var j = 0;

  while (i < nleft && j < nright) {
    if (left[i] < right[j]) {
      array[k] = left[i];
      i = i + 1;
      k = k + 1;
    }

    if (left[i] > right[j]) {
      array[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  }

  while (i < nleft) {
    array[k] = left[i];
    i = i + 1;
    k = k + 1;
  }

  while (i < nright) {
    array[k] = right[j];
    j = j + 1;
    k = k + 1;
  }
  return array;
}

var A = [6, 2, 1, 4, 7, 3];
console.log(merge(A));
