export default class Validator {
    constructor(name) {
        this.name = name;
    }

    validateUsername() {
        const regexp = /^[a-z0-9-_A-Z]+$/;
        const regexpRepeat = /\d{4}/;
        const regexpStart = /^[-_0-9]/
        const regexpEnd = /[-_0-9]$/

        if(this.name.match(regexp) && 
        !regexpRepeat.test(this.name) &&
        !regexpStart.test(this.name) &&
        !regexpEnd.test(this.name)
        ) {
            return true;
        } else {
            return false;
        }
    }
}