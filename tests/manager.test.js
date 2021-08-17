const Manager = require('../manager');

 
test('creates an Manager object', () => {
    const manager = new Manager('Kira', 13, 'kirademarco.codes@gmail.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Kira', 13, 'kirademarco.codes@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 