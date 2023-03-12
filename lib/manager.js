// allows access to employee constructor
const Employee = require("./employee");

// constructor class for manager
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
