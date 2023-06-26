'use strict';

/**
 * Validate postal code. Is that a good description or it need to be more explicit?
 * @param {string} postalCode - the postal code to validate
 * @returns {boolean} - the postal code is valid or not
 */
const validatePostalCode = (postalCode) => {
  const postalCodeValidator = /^[0-9]{5}(?:-[0-9]{4})?$/;
  return postalCodeValidator.test(postalCode);
};

// let us test our postalCodeValidator function using a Belgian postal code
console.log(validatePostalCode('1000')); // false

/*
  But why '1000' is not a valid postal code, simply because we didn't
  take into account who is the user, the validatePostalCode function only
  validate US postal code. Well we are in Belgium, and we need to validate
  the Belgian postal codes.
  Now let us think about our user(s), if our users are only in Belgium, then we should
  create a new function to validate the Belgian postal code.
*/

/**
 * Validate postal Belgian postal codes
 * @param {string} postalCode - the postal code to validate
 * @returns {boolean} - the postal code is valid or not
 */
const validateBelgianPostalCode = (postalCode) => {
  const belgianPostalCodeValidator = /^[0-9]{4}$/;
  return belgianPostalCodeValidator.test(postalCode);
};


console.log(validateBelgianPostalCode('1000')); // true

/*
  Now validateBelgianPostalCode is working well with Belgian postal codes.
  Always you need to keep in mind who the user is
 */
