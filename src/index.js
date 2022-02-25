module.exports = function reverse (n) {
  let a = Math.abs(n) + '';
  let arr = a.split('');
  let revArr = arr.reverse();
  let result = revArr.join('')
      return Number(result)
}
