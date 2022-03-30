function numToEng(number, word = []) {

 const lessThanTwenty = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
 ];

 const lessThanHundred = [
  'zero',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
 ];

 if (number === 0) return word.length ? word.join(' ') : 'zero';
 if (number < 20) {
  word.push(lessThanTwenty[number]);
  return numToEng(0, word);
 } else if (number < 100) {
  word.push(lessThanHundred[Math.floor(number / 10)]);
  return numToEng(number % 10, word);
 } else if (number <= 999) {
  word.push(numToEng(Math.floor(number / 100)) + ' hundred');
  return numToEng(number % 100, word);
 }
};

console.log(numToEng("Your number here"))