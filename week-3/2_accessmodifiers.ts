class BankAccount {
    public accountHolder: string;
    private pin: number;
    private accountStatus: boolean;

    protected transactionLimit: number = 5;

    constructor(holder: string, pin: number) {
        this.accountHolder = holder;
        this.pin = pin;
        this.accountStatus = false;
    }

    public activateAccount(pin: number): void {
        if (this.verifyPin(pin)) {
            this.accountStatus = true;
            console.log("Bank account is now ACTIVE.");
        } else {
            console.log("Incorrect PIN.");
        }
    }

    public deactivateAccount(pin: number): void {
        if (this.verifyPin(pin)) {
            this.accountStatus = false;
            console.log("Bank account is now INACTIVE.");
        } else {
            console.log("Incorrect PIN.");
        }
    }

    private verifyPin(pin: number): boolean {
        return this.pin === pin;
    }
}

class PremiumBankAccount extends BankAccount {

    public addTransactionLimit(): void {
        this.transactionLimit++;

        console.log(
            `Transaction limit increased. Total Limit: ${this.transactionLimit}`
        );
    }
}

const account1 = new BankAccount("Anjali", 1234);

console.log(`Account Holder: ${account1.accountHolder}`);

account1.activateAccount(1234);
account1.deactivateAccount(1234);

const premiumAccount = new PremiumBankAccount("Rahul", 5678);

console.log(`Premium Account Holder: ${premiumAccount.accountHolder}`);

premiumAccount.addTransactionLimit();

premiumAccount.activateAccount(5678);