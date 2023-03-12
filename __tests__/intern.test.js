const Intern = require('../lib/Intern');


test('creating an object for the intern', () => {
    const intern = new Intern('Noah', 33, 'noahcote1010@gmail.com', 'Nazareth College')

    expect(intern.school).toEqual(expect.any(String));
});

test('gets the school of the intern', () => {
    const intern = new Intern('Noah', 33, 'noahcote1010@gmail.com', 'Nazareth College')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));

});


test('gets what role the employee is', () => {
    const intern = new Intern('Noah', 33, 'noahcote1010@gmail.com', 'Nazareth College');

    expect(intern.getRole()).toEqual("Intern");

});