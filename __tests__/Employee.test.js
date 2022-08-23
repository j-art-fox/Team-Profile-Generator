const Employee = require("../lib/Employee")

describe ("Employee", () => {
    it("should gather the employee's information, specifically name, id, and email. ", () => {
        const testEmployee = new Employee("John Doe", "54321","john@doe.com")
        expect(testEmployee.name).toEqual("John Doe")
        expect(testEmployee.id).toEqual("54321")
        expect(testEmployee.email).toEqual("john@doe.com")
    })
})