const Intern = require('../intern');


test('creates an Intern object', () => {
    const intern = new Intern('Kira', 13, 'kirademarco.codes@gmail.com', 'CSUSM');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Kira', 13, 'kirademarco.codes@gmail.com', 'CSUSM');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Kira', 13, 'kirademarco.codes@gmail.com', 'CSUSM');

    expect(intern.getRole()).toEqual("Intern");
}); 