const Manager = require('../classes/Manager');

 
test('create manager object', () => {
    const manager = new Manager('Kira', 13, 'kirademarco.codes@gmail.com', 7);
    
    expect(manager.office).toEqual(expect.any(Number));
});


test('get role of employee', () => {
    const manager = new Manager('Kira', 13, 'kirademarco.codes@gmail.com', 7);

    expect(manager.getRole()).toEqual("Manager");
}); 