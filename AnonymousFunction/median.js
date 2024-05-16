// //f)Return median of two sorted arrays of the same size
let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];

let median = function (nums1, nums2) {
  let merge = nums1.concat(nums2).sort((a, b) => a - b);
  let n = merge.length;
  if (n % 2 === 0) {
    return (merge[n / 2 - 1] + merge[n / 2]) / 2;
  } else {
    return merge[Math.floor(n / 2)];
  }
};
console.log(median(nums1, nums2));
