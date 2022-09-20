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




module.exports = { reverseSentence, addPunctuation, titleCase };
