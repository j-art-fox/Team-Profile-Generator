const Employee = require("../lib/Employee")

describe ("Employee", () => {
    describe ("Engineer", () => {
        it("should gather the employee's information, specifically name, id, and email. ", () => {
            const testEmployee = new Employee("John Doe", "54321","john@doe.com")
            expect(testEmployee.name).toEqual("John Doe")

    })
    })
})