import React from "react";

export default function ShowCode() {
  const code = `
  //フェンの回答

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
  
  
  
  //AIでの回答←こちらの方が最適化されていますので、共有します。
  
  // 1️⃣ 
  // class Employee {	
  // constructor(name, age, position, salary) {	
  // this.name = name;	
  // this.age = age;	
  // this.position = position;	
  // this.salary = salary;	
  // }	
      
  // greeting() {	
  // console.log(`こんにちは！私は ${this.name} です。`);	
  // }	
  // }	
      
  // // 2️⃣ 
  // const employees = [	
  // new Employee("Pooh", 25, "Developer", 300000),	
  // new Employee("Huyen", 23, "Designer", 280000),	
  // new Employee("Lan", 28, "Manager", 400000),	
  // ];	
      
  // // 3️⃣ 
  // employees[0].greeting();	
      
  // // 4️⃣ 
  // const employeeInfo = employees.map((emp) => ({	
  // name: emp.name,	
  // position: emp.position,	
  // }));	
  // console.log("📋 社員リスト:", employeeInfo);	
      
  // // 5️⃣ 
  // const index = employees.findIndex((emp) => emp.name === "Pooh");	
  // console.log("🔍 Poohのポジション", index);	
      
  // // 6️⃣ 	
  // const [firstEmp] = employees;	
  // const { name, position } = firstEmp;	
  // console.log(`👤 Nhân viên đầu tiên: ${name}, chức vụ: ${position}`);	
  
`;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Code hiển thị trong React</h2>
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
