class manager {
    constructor (name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getOffice () {
        return this.office;
    }

    getPosition () {
        return "Manager";
    }
};

module.exports = manager;