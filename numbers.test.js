require('./numbers');

test('3999  est égal à MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
});
test('MMMCMXCIX  est égal à 3999', () => {
    expect(convertToNumber('MMMCMXCIX')).toBe(3999);
});