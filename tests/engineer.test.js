const Engineer = require('../engineer');


test('creates an Engineer object', () => {
    const engineer = new Engineer('Kira', 13, 'kirademarco.codes@gmail.com', 'kirafaye99');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('Kira', 13, 'kirademarco.codes@gmail.com', 'kirafaye99');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('gets role of employee', () => {
    const engineer = new Engineer('Kira', 13, 'kirademarco.codes@gmail.com', 'kirafaye99');

    expect(engineer.getRole()).toEqual("Engineer");
});