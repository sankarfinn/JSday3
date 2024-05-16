let arr13 = [1, 2, 2, 3, 3, 4, 5];

(function (foo13) {
  let unique = [...new Set(foo13)];
  console.log(unique);
})(arr13);
