const { isEven, isVowel, hasCommonFactor } = require('../src/determineSuitabilityScore');

describe('Helper Functions', () => {
    describe('isEven', () => {
        it('should return true for even numbers', () => {
            expect(isEven(0)).toBe(true);
            expect(isEven(2)).toBe(true);
            expect(isEven(4)).toBe(true);
        });

        it('should return false for odd numbers', () => {
            expect(isEven(1)).toBe(false);
            expect(isEven(3)).toBe(false);
            expect(isEven(5)).toBe(false);
        });
    });

    describe('isVowel', () => {
        it('should return true for vowels', () => {
            expect(isVowel('a')).toBe(true);
            expect(isVowel('e')).toBe(true);
            expect(isVowel('i')).toBe(true);
            expect(isVowel('o')).toBe(true);
            expect(isVowel('u')).toBe(true);
        });

        it('should return false for non-vowels', () => {
            expect(isVowel('b')).toBe(false);
            expect(isVowel('c')).toBe(false);
            expect(isVowel('d')).toBe(false);
            expect(isVowel('f')).toBe(false);
            expect(isVowel('g')).toBe(false);
            expect(isVowel('h')).toBe(false);
            expect(isVowel('j')).toBe(false);
            expect(isVowel('k')).toBe(false);
            expect(isVowel('l')).toBe(false);
            expect(isVowel('m')).toBe(false);
            expect(isVowel('n')).toBe(false);
            expect(isVowel('p')).toBe(false);
            expect(isVowel('q')).toBe(false);
            expect(isVowel('r')).toBe(false);
            expect(isVowel('s')).toBe(false);
            expect(isVowel('t')).toBe(false);
            expect(isVowel('v')).toBe(false);
            expect(isVowel('w')).toBe(false);
            expect(isVowel('x')).toBe(false);
            expect(isVowel('y')).toBe(false);
            expect(isVowel('z')).toBe(false);
        });
    });

    describe("hasCommonFactor function", () => {
        it("should return true for 12 and 18", () => {
            expect(hasCommonFactor(12, 18)).toBe(true);
        });

        it("should return true for 27 and 18", () => {
            expect(hasCommonFactor(27, 18)).toBe(true);
        });

        it("should return false for 15 and 7", () => {
            expect(hasCommonFactor(15, 7)).toBe(false);
        });

        it("should return false for 17 and 23", () => {
            expect(hasCommonFactor(17, 23)).toBe(false);
        });
    });
});
