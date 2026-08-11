let flexibleValue: any= 27;
flexibleValue = "My name is Teja Sree";
console.log(flexibleValue);

flexibleValue = true;
console.log(flexibleValue);

let mysteryValue: unknown = "Hello, Everyone!";
if(typeof mysteryValue === "string") {
    console.log("The length of the string is: " + mysteryValue.length);
}

function logNotification(message: string): void {
    console.log("ALERT: "+message);
}

logNotification("Environment Setup complete!");