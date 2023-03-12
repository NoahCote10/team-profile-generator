const Employee = require('../lib/employee');


test('creating an object for all employees', () => {
const employee = new Employee('Noah', 52, 'noahcote10@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('get the employee name', () => {
    const employee = new Employee('Noah', 52, 'noahcote10@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));

});

test('gets the employees ID number', () => {
    const employee = new Employee('Noah', 52, 'noahcote10@gmail.com');


    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets the employees email', () => {
    const employee = new Employee('Noah', 52, 'noahcote10@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test('gets the role of employee', () => {
    const employee = new Employee('Noah', 52, 'noahcote10@gmail.com');


    expect(employee.getRole()).toEqual("Employee")
});