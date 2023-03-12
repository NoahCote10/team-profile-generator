// constructor class for employee
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    this.email;
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
