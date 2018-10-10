"use strict";
var Employee = (function () {
    function Employee(id, name, salary, dept) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
        this.empDepartment = dept;
    }
    return Employee;
}());
exports.Employee = Employee;
