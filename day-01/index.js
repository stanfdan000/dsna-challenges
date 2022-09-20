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

function fizzBuzz(num) {
  const array = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push ('fizzBuzz');
    } else if (i % 3 === 0) {
      array.push('fizz');
    } else if (i % 5 === 0) {
      array.push('buzz');
    } else array.push(i);
  }
  return array;
}


function multiples(n) {
  const array = [];
  if (n >= 50) return array;
  for (let i = 1; i <= 50; i++) {
    if (i % n === 0) array.push(i);
  }
  return array;
}





module.exports = { 
  reverseSentence, 
  addPunctuation, 
  titleCase, 
  ODEV, 
  at, 
  grams, 
  fizzBuzz,
  multiples };
