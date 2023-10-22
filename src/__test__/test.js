import Validator from "../js/Validator"

test("", () => {
    const pers = new Validator("Alex11A");
    expect(pers.validateUsername()).toBe(true)
})
test("", () => {
    const pers = new Validator("1Alex11A");
    expect(pers.validateUsername()).toBe(false)
})
test("", () => {
    const pers = new Validator("1234Alex11A");
    expect(pers.validateUsername()).toBe(false)
})
test("", () => {
    const pers = new Validator("-Alex11A");
    expect(pers.validateUsername()).toBe(false)
})
test("", () => {
    const pers = new Validator("_Alex11A");
    expect(pers.validateUsername()).toBe(false)
})