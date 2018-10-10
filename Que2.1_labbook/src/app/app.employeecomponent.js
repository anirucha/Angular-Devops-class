"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_employee_1 = require("./app.employee");
var AppEmployeeComponent = (function () {
    function AppEmployeeComponent() {
        this.EmpArray = [{ empId: 1001, empName: "Rahul", empSalary: 9000, empDepartment: "Java" },
            { empId: 1002, empName: "Sachin", empSalary: 19000, empDepartment: "OraApps" },
            { empId: 1003, empName: "Vikash", empSalary: 29000, empDepartment: "BI" }];
    }
    AppEmployeeComponent.prototype.showAlert = function (Id, Name, Salary, Department) {
        alert("Employee Id is" + Id + "Name is " + Name + " & Salary is " + Salary + " & Department is " + Department);
    };
    AppEmployeeComponent.prototype.addEmployee = function (Id, Name, Salary, Department) {
        var objE = new app_employee_1.Employee(Id, Name, Salary, Department);
        this.EmpArray.push(objE);
    };
    AppEmployeeComponent.prototype.doDelete = function (Id) {
        console.log(Id);
        this.EmpArray.splice(Id, 1);
    };
    AppEmployeeComponent.prototype.doUpdate = function (Id) {
        this.data = Id;
        console.log(Id);
        this.uId = this.EmpArray[Id].empId;
        this.uName = this.EmpArray[Id].empName;
        this.uSalary = this.EmpArray[Id].empSalary;
        this.uDepartment = this.EmpArray[Id].empDepartment;
        console.log(this.uId);
    };
    AppEmployeeComponent.prototype.updateEmployee = function (Id, Name, Salary, Department) {
        this.EmpArray[this.data].empId = Id;
        this.EmpArray[this.data].empName = Name;
        this.EmpArray[this.data].empSalary = Salary;
        this.EmpArray[this.data].empDepartment = Department;
    };
    return AppEmployeeComponent;
}());
AppEmployeeComponent = __decorate([
    core_1.Component({
        selector: '<my-component></my-component>',
        templateUrl: './app.employeecomponent.html',
    })
], AppEmployeeComponent);
exports.AppEmployeeComponent = AppEmployeeComponent;
