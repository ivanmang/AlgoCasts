// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var newstr ="";
  var i = 0;
  for(i = str.length ; i >= 0 ; i--){
    newstr = newstr+ str.charAt(i);
  }
  return newstr;
}

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;
