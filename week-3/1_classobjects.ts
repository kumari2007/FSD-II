class MobileInsurance {
    public ownerName: string;
    public brand: string;
    public price: number;
    public insuranceYears: number;

    constructor(owner: string, brand: string, price: number);
    constructor(owner: string, brand: string, price: number, years: number);

    constructor(
        owner: string,
        brand: string,
        price: number,
        years?: number
    ) {
        this.ownerName = owner;
        this.brand = brand;
        this.price = price;
        this.insuranceYears = years ?? 1;
    }

    public calculateInsuranceCost(): number {
        return this.price * 0.08 * this.insuranceYears;
    }

    public displayDetails(): void {
        console.log("Mobile Insurance Details:");
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Mobile Brand: ${this.brand}`);
        console.log(`Price: ₹${this.price}`);
        console.log(`Insurance: ${this.insuranceYears} year(s)`);
        console.log(
            `Insurance Cost: ₹${this.calculateInsuranceCost()}`
        );
    }
}

const mobile1 = new MobileInsurance(
    "Anjali",
    "Samsung",
    30000
);

const mobile2 = new MobileInsurance(
    "Rahul",
    "OnePlus",
    25000,
    3
);
mobile1.displayDetails();
mobile2.displayDetails();
mobile2.price = 30000;

console.log(
    `Updated Insurance Cost for Rahul: ₹${mobile2.calculateInsuranceCost()}`
);