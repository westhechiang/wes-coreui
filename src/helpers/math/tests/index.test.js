import {
  round5,
} from '../';

describe('src/helpers/math/index.js', () => {
  describe('round5', () => {
    it('should round up to 5 given a 3 as input', () => {
      const expected = 5;
      const actual = round5(3);
      expect(actual).toEqual(expected);
    });

    it('should round up to 5 given a 3 as input', () => {
      const expected = 0;
      const actual = round5(2);
      expect(actual).toEqual(expected);
    });
  });
});
