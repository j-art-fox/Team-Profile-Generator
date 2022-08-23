const Manager = require("../lib/Manager")

describe ("Manager", () => {
    it("should gather the manager's name, id, email, and office number. ", () => {
        const testManager = new Manager("John Doe", "54321","john@doe.com", "666, because it looks like the manager is Satan!")
        expect(testManager.name).toEqual("John Doe")
        expect(testManager.id).toEqual("54321")
        expect(testManager.email).toEqual("john@doe.com")
        expect(testManager.office).toEqual("666, because it looks like the manager is Satan!")
    })
}) 