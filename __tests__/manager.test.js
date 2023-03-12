const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Bossman', 222, 'BigBadBossman@Bossman.com', 4);

    expect(manager.office).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Bossman', 222, 'BigBadBossman@Bossman.com');

    expect(manager.getRole()).toEqual("Manager");
}); 