const Engineer = require('../lib/engineer');


test('creates an object for the engineer', () => {
    const engineer = new Engineer('Noah', 66, 'noahcote10@gmail.com', 'noahcote10');

    expect(engineer.github).toEqual(expect.any(String));
})


test('gets the github account name', () => {
    const engineer = new Engineer('Noah', 66, 'noahcote10@gmail.com', 'noahcote10');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('gets role of employee', () => {
    const engineer = new Engineer('Noah', 66, 'noahcote10@gmail.com', 'noahcote10');

    expect(engineer.getRole()).toEqual("Engineer");
})