'use strict';

/**
 * validateEmail :  validate email address
 * @param {string} email- - email to validate
 * @returns {boolean} is true for validate email or false
 */

const validateEmail = (email) => {
    const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailPattern.test(email);
};

describe('validateEmail', () => {
    test('should return true for a valid email address', () => {
        const validEmail = 'john.doe@example.com';
        expect(validateEmail(validEmail)).toBe(true);
    });

    test('should return false for an email without @ symbol', () => {
        const invalidEmail = 'invalid.email.com';
        expect(validateEmail(invalidEmail)).toBe(false);
    });

    test('should return false for an email without domain', () => {
        const invalidEmail = 'john.doe@';
        expect(validateEmail(invalidEmail)).toBe(false);
    });

    test('should return false for an email without top-level domain', () => {
        const invalidEmail = 'john.doe@example';
        expect(validateEmail(invalidEmail)).toBe(false);
    });
});
