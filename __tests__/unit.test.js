// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber()
test('test1 isPhoneNumber() return true', () => {
    expect(functions.isPhoneNumber('(123) 456-7899')).toBe(true);
});

test('test2 isPhoneNumber() return true', () => {
    expect(functions.isPhoneNumber('(858) 534-2230')).toBe(true);
});

test('test3 isPhoneNumber() return false', () => {
    expect(functions.isPhoneNumber('abc')).toBe(false);
});

test('test4 isPhoneNumber() return false', () => {
    expect(functions.isPhoneNumber('8585342230')).toBe(false);
});

// isEmail()
test('test1 isEmail() return true', () => {
    expect(functions.isEmail('cse110@ucsd.edu')).toBe(true);
});

test('test2 isEmail() return true', () => {
    expect(functions.isEmail('fall2022@ucsd.edu')).toBe(true);
});

test('test3 isPhoneNumber() return false', () => {
    expect(functions.isEmail('abc')).toBe(false);
});

test('test4 isPhoneNumber() return false', () => {
    expect(functions.isEmail('8585342230')).toBe(false);
});

// isStrongPassword()
test('test1 isStrongPassword() return true', () => {
    expect(functions.isStrongPassword('cse110_fa22')).toBe(true);
});

test('test2 isPhoneNumber() return true', () => {
    expect(functions.isStrongPassword('ucsd_November22')).toBe(true);
});

test('test3 isPhoneNumber() return false', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});

test('test4 isPhoneNumber() return false', () => {
    expect(functions.isStrongPassword('8585342230')).toBe(false);
});

// isDate()
test('test1 isDate() return true MM / DD / YYYY', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});

test('test2 isDate() return true M / D / YYYY', () => {
    expect(functions.isDate('2/1/2022')).toBe(true);
});

test('test3 isPhoneNumber() return false', () => {
    expect(functions.isDate('abc')).toBe(false);
});

test('test4 isPhoneNumber() return false', () => {
    expect(functions.isDate('8585342230')).toBe(false);
});

// isHexColor()
test('test1 isHexColor() return true', () => {
    expect(functions.isHexColor('#9334eb')).toBe(true);
});

test('test2 isHexColor() return true', () => {
    expect(functions.isHexColor('#eb3434')).toBe(true);
});

test('test3 isHexColor() return false', () => {
    expect(functions.isHexColor('1')).toBe(false);
});

test('test4 isHexColor() return false', () => {
    expect(functions.isHexColor('8585342230')).toBe(false);
});