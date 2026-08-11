class Hospital {
    public static readonly hospitalName: string = "Sunrise Hospital";
    public static totalPatients: number = 0;

    public readonly patientId: string;
    public patientName: string;

    constructor(name: string, id: string) {
        this.patientName = name;
        this.patientId = id;

        Hospital.totalPatients++;
    }

    public static hospitalInfo(): void {
        console.log(`Welcome to ${Hospital.hospitalName}`);
        console.log("Please carry your patient ID during every visit.");
    }

    public showPatient(): void {
        console.log(`Patient Name: ${this.patientName}`);
        console.log(`Patient ID: ${this.patientId}`);
    }
}

console.log(Hospital.hospitalName);

Hospital.hospitalInfo();

const patient1 = new Hospital("Anjali", "P-101");
const patient2 = new Hospital("Rahul", "P-102");

patient1.showPatient();
patient2.showPatient();

console.log(patient1.patientId);

console.log(`Total Patients Registered: ${Hospital.totalPatients}`);