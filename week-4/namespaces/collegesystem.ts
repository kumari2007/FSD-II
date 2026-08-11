namespace CollegeSystem {
    const minimumAttendance = 75;

    export function isEligibleForExam(attendance: number): boolean {
        return attendance >= minimumAttendance;
    }

    export function validateStudentId(id: string): string {
        const idPattern = /^S-[0-9]{3}$/;

        if (idPattern.test(id.toUpperCase())) {
            return id.toUpperCase();
        } else {
            return "Invalid";
        }
    }

    export namespace Fees {
        export function calculateFee(amount: number): number {
            return amount + (amount * 0.05);
        }
    }
}


// Testing the program

const studentAttendance = 82;
const student_Id = "S-056";

console.log(
    `Eligible for Exam? ${CollegeSystem.isEligibleForExam(studentAttendance)}`
);

console.log(
    `Student ID: ${CollegeSystem.validateStudentId(student_Id)}`
);

const courseFee = 5000;

const finalFee = CollegeSystem.Fees.calculateFee(courseFee);

console.log(`Final Fee: ₹${finalFee}`);