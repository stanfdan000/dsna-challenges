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

module.exports = { reverseSentence, addPunctuation, titleCase, ODEV };
