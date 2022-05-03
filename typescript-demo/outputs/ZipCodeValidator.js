export default class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
ZipCodeValidator.numberRegexp = /^[0-9] + $/;
