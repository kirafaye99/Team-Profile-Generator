const Employee = require("../lib/Employee");


test("create employee object",() => {
    const employee = new Employee("Kira", 13, "kirademarco.codes@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test("gets employee's name", () => {
    const employee = new Employee("Kira", 13, "kirademarco.codes@gmail.com");
    expect(employee.getName()).toEqual(expect.any(String));
});


test("gets employee's ID", () => {
    const employee = new Employee("Kira", 13, "kirademarco.codes@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});


test("gets employee's email", () => {
    const employee = new Employee("Kira", 13, "kirademarco.codes@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test("get role of employee", () => {
    const employee = new Employee("Kira", 13, "kirademarco.codes@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
}); 