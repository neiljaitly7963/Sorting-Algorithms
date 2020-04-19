var array = [3,1,7,8,2];

function sort(A){
  var n = A.length;
  var value = 0;
  var hole = 0;
  for(var i=1; i <= n-1; i++){
    value = A[i];
    hole = i;

    while (hole > 0 && A[hole-1] > value){
      A[hole] = A[hole -1];
      hole = hole -1;
    }
    A[hole] = value;
  }
}
console.log("unsorted:- "+array);
sort(array);
console.log("sorted:- "+array);
