import { StudentRecord } from "./studentrecord.js";
import { Student } from "./students.js";

const student: Student = {
    name: "Pravallika",
    branch: "AI&ML",
    year: "2nd Year"
};

const myRecord = new StudentRecord(student, 85, 2026);

myRecord.printRecord();