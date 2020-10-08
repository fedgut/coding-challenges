function pivotedBinarySearch(arr, num, start = 0, end = arr.length - 1) {
  // Base condition
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  const searchLeft = [arr, num, start, mid - 1];
  const searchRight = [arr, num, mid + 1, end];

  // When we find num, return its index
  if (arr[mid] === num) return mid;

  // if left is sorted, see if num is in left
  if (arr[start] < arr[mid]) {
    if (arr[start] <= num && num < arr[mid]) {
      return pivotedBinarySearch(...searchLeft);
    } // If num is not in left, search right
    return pivotedBinarySearch(...searchRight);
  }
  // If right is sorted and num is in right, search right
  if (arr[mid] < num && num <= arr[end]) {
    return pivotedBinarySearch(...searchRight);
  }
  // If num is not in the right, and left is not sorted, search left
  return pivotedBinarySearch(...searchLeft);
}

console.log(pivotedBinarySearch([2, 3, 4, 5, 6, 0, 1], 6));
