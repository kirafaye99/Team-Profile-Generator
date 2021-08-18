const Intern = require('../classes/Intern');


test('create intern object', () => {
    const intern = new Intern('Kira', 13, 'kirademarco.codes@gmail.com', 'CSUSM');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test("get employee's school", () => {
    const intern = new Intern('Kira', 13, 'kirademarco.codes@gmail.com', 'CSUSM');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('get role of employee', () => {
    const intern = new Intern('Kira', 13, 'kirademarco.codes@gmail.com', 'CSUSM');

    expect(intern.getRole()).toEqual("Intern");
}); 