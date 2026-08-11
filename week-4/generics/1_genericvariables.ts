class StudentRecord<T> {
    private data: T;

    constructor(initialData: T) {
        this.data = initialData;
    }

    public getData(): T {
        return this.data;
    }

    public setData(newData: T): void {
        this.data = newData;
        console.log("Student record updated successfully.");
    }
}


const studentIdRecord = new StudentRecord<number>(101);

let studentId = studentIdRecord.getData();

console.log(`Student ID: ${studentId}`);

studentIdRecord.setData(202);

const studentNameRecord = new StudentRecord<string>("Anjali");

console.log(`Student Name: ${studentNameRecord.getData()}`);

interface Student {
    name: string;
    branch: string;
}

const studentRecord = new StudentRecord<Student>({
    name: "Rahul",
    branch: "AIML"
});

const myStudent = studentRecord.getData();

console.log(`Student Name: ${myStudent.name}`);
console.log(`Branch: ${myStudent.branch}`);