require('./numbers');

test('3999  est égal à MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
    expect(convertToRoman(1245)).toBe('MCCXLV');
    expect(convertToRoman(48)).toBe('XLVIII');
});
test('MMMCMXCIX  est égal à 3999', () => {
    expect(convertToNumber('MMMCMXCIX')).toBe(3999);
    expect(convertToRoman('MCCXLV')).toBe(1245);
    expect(convertToRoman('XLVIII')).toBe(48);
});