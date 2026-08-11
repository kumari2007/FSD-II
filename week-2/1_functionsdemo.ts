function welcomeStudent(name: string): string {
    return `Welcome, ${name}!`;
}

function getCourse(course: string = "AI&ML"): string {
    return `Course: ${course}`;
}

function sendNotification(phoneNumber: number, message?: string): void {
    console.log(`Sending notification to ${phoneNumber}...`);

    if (message) {
        console.log(`Message: ${message}`);
    }
}


function calculateTotalMarks(...marks: number[]): number {
    return marks.reduce((total, mark) => total + mark, 0);
}


console.log(welcomeStudent("Pravallika"));       

console.log(getCourse());                       
console.log(getCourse("Computer Science"));      

sendNotification(9876543210);                   
sendNotification(9876543210, "Your class starts at 9 AM"); 

const totalMarks = calculateTotalMarks(85, 90, 78, 92);  
console.log(`Total Marks: ${totalMarks}`);