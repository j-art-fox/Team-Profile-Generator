const Manager = require("../lib/Manager")

describe ("Manager", () => {
    it("should gather the manager's name, id, email, and office number. ", () => {
        const testManager = new Manager("John Doe", "54321", "666, because it looks like the manager is Satan!", "john@doe.com")
        expect(testManager.name).toEqual("John Doe")
        expect(testManager.id).toEqual("54321")
        expect(testManager.office).toEqual("666, because it looks like the manager is Satan!")
        expect(testManager.email).toEqual("john@doe.com")
    })
}) 