function reverseSentence(sentence) {
  return sentence.split(' ').map(word =>
    word.split('').reverse().join('')).join(' ');
}
module.exports = reverseSentence;
