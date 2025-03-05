class Department {
    private employees: string[] = [];

    constructor(private name: string) {
    }

    describe() {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');

accounting.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printEmployeeInformation();