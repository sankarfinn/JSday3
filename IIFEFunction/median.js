//f)Return median of two sorted arrays of the same size

let nums3 = [1, 3, 5];
let nums4 = [2, 4, 6];

(function (nums3, nums4) {
  let merged = nums3.concat(nums4).sort((a, b) => a - b);
  let m = merged.length;
  if (m % 2 === 0) {
    console.log((merged[m / 2 - 1] + merged[m / 2]) / 2);
  } else {
    console.log(merged[Math.floor(m / 2)]);
  }
})(nums3, nums4);
