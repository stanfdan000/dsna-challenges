const reverseSentence = require('./index.js');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {

    it('should reverse a sentence', () => {
      const output = reverseSentence('alchemy rocks gold');
      expect(output).toEqual('ymehcla skcor dlog');
    });

  });
});



















