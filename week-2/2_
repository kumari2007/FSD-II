function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount);
}

const calculateDiscountArrow = (price: number, discount: number): number => {
    return price - (price * discount);
};

const getWelcomeMessage = (name: string): string =>
    `Welcome, ${name}!`;

const productPrice: number = 1000;    
const discountRate: number = 0.20;    

console.log(getWelcomeMessage("Pravallika"));


const finalPrice1 = calculateDiscount(productPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);

const finalPrice2 = calculateDiscountArrow(productPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);


/*
INLINE COMPARISON:

Traditional:
function(a: number): number {
    return a * a;
}

Arrow:
(a: number): number => a * a;
*/