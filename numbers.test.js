//To test automatically
//jest --watchAll

require('./numbers');

test('3999  est égal à MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
    expect(convertToRoman(1245)).toBe('MCCXLV');
    expect(convertToRoman(56)).toBe('LVI');
});
test('MMMCMXCIX  est égal à 3999', () => {
    expect(convertToNumber('MMMCMXCIX')).toBe(3999);
    expect(convertToNumber('MCCXLV')).toBe(1245);
    expect(convertToNumber('LVI')).toBe(56);
});