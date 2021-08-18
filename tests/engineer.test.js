const Engineer = require('../classes/Engineer');


test('create engineer object', () => {
    const engineer = new Engineer('Kira', 13, 'kirademarco.codes@gmail.com', 'kirafaye99');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test("get engineer's github", () => {
    const engineer = new Engineer('Kira', 13, 'kirademarco.codes@gmail.com', 'kirafaye99');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('get role of employee', () => {
    const engineer = new Engineer('Kira', 13, 'kirademarco.codes@gmail.com', 'kirafaye99');

    expect(engineer.getRole()).toEqual("Engineer");
});