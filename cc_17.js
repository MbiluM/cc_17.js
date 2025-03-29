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

class SalesRep { //SalesRep class
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

// VIPCustomer class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }

    //getTotalSpent to include 10% bonus
    getTotalSpent() {
        const totalSpent = super.getTotalSpent();
        return totalSpent * 1.1; // Adding 10% bonus
    }
}

//customer and SalesRep classes
const customer1 = new Customer("Tendai Masuta", "tendaimasuta23.com");
const customer2 = new Customer("Gumani Mabilu", "gumanimbailu@icloud.com");
const vipCustomer = new VIPCustomer("Lufuno Mabilu", "lufunomabilu@icloud.com", "Gold");

customer1.addPurchase(50);
customer1.addPurchase(120);
customer1.addPurchase(30);
customer2.addPurchase(200);
vipCustomer.addPurchase(500);

console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent()}`);
console.log(`Total spent by ${customer2.name}: $${customer2.getTotalSpent()}`);
console.log(`Total spent by ${vipCustomer.name} (VIP ${vipCustomer.vipLevel}): $${vipCustomer.getTotalSpent()}`);

const salesRep1 = new SalesRep("Phala Mabilu");
salesRep1.addClient(customer1);
salesRep1.addClient(customer2);
salesRep1.addClient(vipCustomer);

console.log(`${salesRep1.name}'s clients:`);
salesRep1.clients.forEach(client => console.log(`- ${client.name}`));

console.log(`Total spent by Tendai Masuta: $${salesRep1.getClientTotal("Tendai Masuta")}`);
console.log(`Total spent by Lufuno Mabilu (VIP): $${salesRep1.getClientTotal("Lufuno Mabilu")}`);

// Client Report System
const allCustomers = [customer1, customer2, vipCustomer];

//calculate total revenue
const totalRevenue = allCustomers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);
console.log(`Total revenue from all customers: $${totalRevenue}`);

//find customers spend over $500
const highSpenders = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log("High-spending customers:");
highSpenders.forEach(customer => console.log(`- ${customer.name}: $${customer.getTotalSpent()}`));

//customer summary
const customerSummary = allCustomers.map(customer => ({ name: customer.name, totalSpent: customer.getTotalSpent() }));
console.log("Customer Summary:", customerSummary);
