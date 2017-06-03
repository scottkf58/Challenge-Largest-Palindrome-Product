/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var max;


  if ( digits === 2) {
    max = 100;
  }

  if (digits === 3) {
    max = 1000;
  }


  for (var i = 1; i < max; i++) {
    for (var j = 1; j < max; j++) {
      var product = i * j;
      var reverse = product.toString().split('').reverse().join('');

      if (product == reverse && palindromeNumber < product) {
        factor_0 = i;
        console.log(factor_0);
        factor_1 = j;
        console.log(factor_1);
        palindromeNumber = product;
        console.log(palindromeNumber);
      }

    }
  }



  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};