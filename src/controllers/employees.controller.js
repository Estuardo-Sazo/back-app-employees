const employeeCtrl = {}

const Employee = require('../models/employee');
employeeCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find();

    res.json(employees);
};

employeeCtrl.getEmployee = async(req, res) => {
    console.log(req.params);

    const employee = await Employee.findById(req.params.id);
    res.send(employee);

};

employeeCtrl.createEmployee = async(req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.send({ message: 'Cliente Created' });

};


employeeCtrl.updateEmployees = async(req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'Employee Updated' });


};

employeeCtrl.deleteEmployees = async(req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({ status: 'Employee Deleted' });

};


module.exports = employeeCtrl