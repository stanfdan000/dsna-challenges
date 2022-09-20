const { reverseSentence, addPunctuation, titleCase } = require('./index.js');

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
















