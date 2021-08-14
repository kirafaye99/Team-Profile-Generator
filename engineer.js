class engineer {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGithub () {
        return this.github;
    }

    getPosition () {
        return "Engineer";
    }
}

module.exports = engineer