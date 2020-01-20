// (this class will be the basis for other three classes; they will `extend` from it)
// The Employee class will have the following properties and methods:
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName () {
        return this.name;
    }
    getEmail () {
        return this.email;
    }
    getId () {
        return this.id;
    }
    getRole () {
        return "Employee";
    }
}
module.exports = Employee;
// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee
