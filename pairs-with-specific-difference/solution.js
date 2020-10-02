function findPairsWithGivenDifference(arr, k) {
  if (k == 0) {
    return [];
  }
  
  let possibleYs = arr.map(
    item => item - k 
  )
  
  let pairs = [];

  for (let i = 0; i < arr.length; i += 1){
    if (possibleYs.indexOf(arr[i]) !== -1) {
      pairs.push( [ arr[i]+k, arr[i] ])
    }
  }
  return pairs;
}
