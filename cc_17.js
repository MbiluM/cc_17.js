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
};

class SalesRep { // SalesRep class
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    // add a client
    addClient(customer) {
        if (customer instanceof Customer) {
            this.clients.push(customer);
            console.log(`${customer.name} added to ${this.name}'s client list.`);
        } else {
            console.log(`Invalid client.`);
        }
    }

    //total spent by a specific client
    getClientTotal(name) {
        const client = this.clients.find(customer => customer.name === name);
        return client ? client.getTotalSpent() : `Client ${name} not found.`;
    }
}

//Customer and SalesRep classes
const customer1 = new Customer("Tendai Masuta", "tendaimasuta23.com");
const customer2 = new Customer("Gumani Mabilu", "gumanimbailu@icloud.com");

customer1.addPurchase(50);
customer1.addPurchase(120);
customer1.addPurchase(30);
customer2.addPurchase(200);

console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent()}`);
console.log(`Total spent by ${customer2.name}: $${customer2.getTotalSpent()}`);

const salesRep1 = new SalesRep("John Doe");
salesRep1.addClient(customer1);
salesRep1.addClient(customer2);

console.log(`${salesRep1.name}'s clients:`);
salesRep1.clients.forEach(client => console.log(`- ${client.name}`));

console.log(`Total spent by Tendai Masuta: $${salesRep1.getClientTotal("Tendai Masuta")}`);
