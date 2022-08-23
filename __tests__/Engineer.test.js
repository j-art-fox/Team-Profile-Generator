const Engineer = require("../lib/Engineer")

describe ("Engineer", () => {
    it("should gather the engineer's name, id, email, and github handle. ", () => {
        const testEngineer = new Engineer("John Doe", "54321","john@doe.com", "GitHubHandle")
        expect(testEngineer.name).toEqual("John Doe")
        expect(testEngineer.id).toEqual("54321")
        expect(testEngineer.email).toEqual("john@doe.com")
        expect(testEngineer.userName).toEqual("GitHubHandle")
    })
})