import {Component} from '@angular/core';
import { Employee } from "./app.employee";

@Component({
    selector:'<my-component></my-component>',
    templateUrl:'./app.employeecomponent.html',
    
})

export class AppEmployeeComponent{
    data:number;
    uId:number;
    uName:string;
    uSalary:number;
    uDepartment:string;
 
    EmpArray:Employee[]=[{empId:1001,empName:"Rahul",empSalary:9000,empDepartment:"Java"},
                         {empId:1002,empName:"Sachin",empSalary:19000,empDepartment:"OraApps"},
                         {empId:1003,empName:"Vikash",empSalary:29000,empDepartment:"BI"}]

                                     
                                     
                                  

    showAlert(Id:number,Name:string,Salary:number,Department:string):void{
        alert("Employee Id is"+Id +"Name is "+Name+" & Salary is "+Salary+" & Department is "+Department);
        
    }

    addEmployee(Id:number,Name:string,Salary:number,Department:string):void{
        
        let objE = new Employee(Id,Name,Salary,Department);
        this.EmpArray.push(objE);
        
    }
    
    doDelete(Id:number):void{
        console.log(Id);
        this.EmpArray.splice(Id, 1);
        
        
    }
    
    doUpdate(Id:number):void{
        this.data = Id;
        console.log(Id);
        this.uId = this.EmpArray[Id].empId;
        this.uName = this.EmpArray[Id].empName;
        this.uSalary = this.EmpArray[Id].empSalary;
        this.uDepartment = this.EmpArray[Id].empDepartment;
        console.log(this.uId);
        
    }
    
    updateEmployee(Id:number,Name:string,Salary:number,Department:string):void{
        this.EmpArray[this.data].empId = Id;
        this.EmpArray[this.data].empName = Name;
        this.EmpArray[this.data].empSalary = Salary;
        this.EmpArray[this.data].empDepartment = Department;
        
    }

    


}