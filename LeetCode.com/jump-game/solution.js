function jumpToEnd(arr) {
  let possible = false;
  if (arr.some(elem => elem === 0)) {
    if (arr.some(elem => elem !== 0)) {
      const hash = arr.map((key, elem) => [key, elem]);
      const map = new Map(hash);
      map.forEach((key, elem) => {
        if (elem === 0) {
          for (let i = 0; i <= key; i += 1) {
            if (hash[i].key + hash[i].elem < key) {
              return false;
            }
          }
        }
        return true;
      });
    }
    return possible;
  }
  possible = true;
  return possible;
}

const arr0 = [0, 0, 0, 0, 0];
const arr1 = [3, 2, 1, 0, 4];
const arr2 = [2, 3, 1, 1, 4];

console.log(jumpToEnd(arr2));
console.log(jumpToEnd(arr0));
console.log(jumpToEnd(arr1));
