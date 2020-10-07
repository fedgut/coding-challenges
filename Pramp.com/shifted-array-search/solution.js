function binarySearch(arr, num, start = 0, end = arr.length - 1) {
  // Base condition
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  console.log(start, end, mid);
  // When we find num, return its index
  if (arr[mid] === num) return mid;

  // if num in left, search left
  if (num < mid) {
    return binarySearch(arr, num, start, mid - 1);
  }
  // if num in right, search right
  return binarySearch(arr, num, mid + 1, end);
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12));
