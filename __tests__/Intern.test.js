const Intern = require("../lib/Intern")

describe ("Intern", () => {
    it("should gather the intern's name, id, email, and school name. ", () => {
        const testIntern = new Intern("John Doe", "54321","john@doe.com", "academicInstitution")
        expect(testIntern.name).toEqual("John Doe")
        expect(testIntern.id).toEqual("54321")
        expect(testIntern.email).toEqual("john@doe.com")
        expect(testIntern.school).toEqual("academicInstitution")
    })
}) 