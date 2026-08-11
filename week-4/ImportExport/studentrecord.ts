import { MAX_ATTENDANCE, PASSING_PERCENTAGE } from "./constants.js";
import { Student } from "./students.js";

export class StudentRecord {
    constructor(
        public student: Student,
        private marks: number,
        public recordId: number
    ) {}

    public calculatePercentage(): number {
        return (this.marks / MAX_ATTENDANCE) * 100;
    }

    public checkResult(): string {
        if (this.calculatePercentage() >= PASSING_PERCENTAGE) {
            return "PASS";
        } else {
            return "FAIL";
        }
    }

    public printRecord(): void {
        console.log("----- Student Record -----");
        console.log(`Student Name: ${this.student.name}`);
        console.log(`Branch: ${this.student.branch}`);
        console.log(`Record ID: ${this.recordId}`);
        console.log(`Year: ${this.student.year}`);
        console.log(`Marks: ${this.marks}/${MAX_ATTENDANCE}`);
        console.log(`Percentage: ${this.calculatePercentage()}%`);
        console.log(`Result: ${this.checkResult()}`);
    }
}