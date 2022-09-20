const { 
  reverseSentence, 
  addPunctuation, 
  titleCase, 
  ODEV, 
  at, 
  grams, 
  fizzBuzz } = require('./index.js');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      const output = reverseSentence('alchemy rocks gold');
      expect(output).toEqual('ymehcla skcor dlog');
    });

  });
});

it('add punctuation', () => {
  const addE = addPunctuation('!!');
  const addQ = addPunctuation('?');
  const stop = addE('stop');
  expect(stop).toEqual('stop!!');
  expect(addQ('why')).toEqual('why?');
});


it('title case', () => {
  expect(titleCase('stop on the ground')).toEqual('Stop On The Ground');
});


it('oddish or evenish', () => {
  expect(ODEV('234')).toEqual('evenish');
  expect(ODEV('345')).toEqual('oddish');
  expect(ODEV('789')).toEqual('oddish');
});

it('find array', () => {
  const arr = [1, 2, 3, 4];
  expect(at(arr, 2)).toEqual(3);
  expect(at(arr, -1)).toEqual(4);
});

it('anagrams', () => {
  const wordOne = 'water';
  const wordTwo = 'wet';
  const one = 'fire';
  const two = 'hot';
  expect(grams(wordOne, wordTwo)).toEqual(true);
  expect(grams(one, two)).toEqual(false);
});

it('FizzBuzz', () => {
  const array = [
    1, 2, 
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzBuzz'
  ];
  expect(fizzBuzz(15)).toEqual(array);
});











