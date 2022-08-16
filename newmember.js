function Newmember (name, position, id, office, email, github){
    this.name = name;
    this.position = position;
    this.id = id;
    this.office = office;
    this.email = email;
    this.github = github;
    this.member = () => {
        console.log([this.name])
    }
}

module.exports = {
    Newmember,
}