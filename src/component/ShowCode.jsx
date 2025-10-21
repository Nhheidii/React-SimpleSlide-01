import React from "react";
// This file is created by AI
export default function ShowCode() {
  const code = `
  //フェンの回答01

  class Employee {
      constructor(name, age, salary) {
          this.name = name,
              this.age = age,
              this.salary = salary
      }
  
      greeting() {
          console.log("Konnichiwa");
      }
  }
  
  
  const employee1 = new Employee("Hiroki", 30, 50);
  const employee2 = new Employee("Kato", 20, 50);
  const employee3 = new Employee("Sakura", 10, 50);
  
  const employees = [employee1, employee2, employee3];
  employees[0].greeting();
  
  class newEmployee {
      constructor(name, salary) {
          this.name = name,
          this.salary = salary
      }
  }
  
  const employeeInfor = employees.map((employee) => {
      const { name, salary } = employee;
      return (new newEmployee(name, salary));
  })
  console.log(employeeInfor);
  
  const goalIndedx = employees.findIndex((employee) => {
      return employee.name === "Hiroki"
  })
  console.log(goalIndedx);   
  
  const destrucEmployees = employees.map((employee) => {
      const {salary, ...display} = employee;  
      return display;  
     
  });
  console.log(destrucEmployees);  


//フェンの回答02
//Mondai1
class Employee01 {
    constructor(name, age, salary){
        this.name = name, 
        this.age = age, 
        this.salary = salary
    }

    //method
    greeting(){
        console.log("Konnichiwa, watashi ha " + this.name);
    }
}
//2
const Employee001 = new Employee01 ("Hiroki", 30, 30); 
const Employee002 = new Employee01 ("Kato", 20, 30); 
const Employee003 = new Employee01 ("Sato", 18, 30);

//3
const employees01 = [Employee001, Employee002, Employee003]; 
employees01[0].greeting(); 

//4
const employeeInfor01 = employees01.map((employee) => {
    return {name : employee.name, 
     salary : employee.salary};       }
)
console.log(employeeInfor01); 

//5 Destructuring with object
let {name, age} = employees01[0];   
console.log(name, age);  

//AIの回答
...

  	
`;

  return (
    <div style={{ padding: "20px" }}>
      <h2>回答</h2>
      <pre
        style={{
          background: "#1e1e1e",
          color: "#dcdcdc",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
        {code}
      </pre>
    </div>
  );
}
