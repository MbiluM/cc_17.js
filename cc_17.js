class Customer { // Customer class
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    // method to add a purchase
    addPurchase(amount) {
        if (amount > 0) {
            this.purchaseHistory.push(amount);
            console.log(`${this.name} made a purchase of $${amount}.`);
        } else {
            console.log(`Invalid purchase amount.`);
        }
    }

    // to get total amount spent
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// test for Customer class
const customer1 = new Customer("Tendai Masuta", "Tendaimasuta23@gamil.com");
console.log(`New customer created: ${customer1.name}, Email: ${customer1.email}`);

customer1.addPurchase(50);
customer1.addPurchase(120);
customer1.addPurchase(30);

console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent()}`);
