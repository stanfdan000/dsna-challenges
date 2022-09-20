function reverseSentence(sentence) {
  return sentence.split(' ').map(word =>
    word.split('').reverse().join('')).join(' ');
}


function addPunctuation(string) {
  return function punctuation(q) {
    return (`${q}${string}`);
  };
}

function titleCase(string) {
  return string 
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}


function ODEV(number) {
  let stuff = 0;
  String(number).split('').map(number => stuff += Number(number));
  return stuff % 2 === 0 ? 'oddish' : 'evenish';
}


function at(arr, i) {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}


function grams(string1, string2) {
  const fire = string1.split('');
  const water = string2.split('');
  return fire.map(letter => water.includes(letter)).includes(true) ? true : false;
}

module.exports = { reverseSentence, addPunctuation, titleCase, ODEV, at, grams };
