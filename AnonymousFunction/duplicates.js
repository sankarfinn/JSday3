// Remove Duplicates From An Array
let arr5 = [1, 2, 2, 3, 3, 4, 4, 5, 5];
let duplicate = function (foo5) {
  return foo5.reduce((acc, current) => {
    if (!acc.includes(current)) {
      acc.push(current);
    }
    return acc;
  }, []);
};
console.log(duplicate(arr5));
