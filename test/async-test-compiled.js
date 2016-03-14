import co from "co";
import chai from "chai";
import expect from "chai.expect";
var mocha = require('mocha');
var coMocha = require('co-mocha');
coMocha(mocha);

describe("New customer", function () {

    var Customer = function (name) {
        this.name = name;
        this.accounts = [];

        this.addAccount = acc => {

            return new Promise((resolve, reject) => {
                this.accounts[this.accounts.length] = acc;
                resolve(this.accounts);
            });
        };
    };

    Customer.prototype.create = function (name) {
        return new Promise(function (resolve, reject) {
            resolve(new Customer(name));
        });
    };

    var Business = function (name) {
        this.name = name;
        this.customers = [];

        this.addCustomer = name => {

            return new Promise((resolve, reject) => {
                this.customers.push(name);
                resolve(this.customers);
            });
        };
    };

    Business.prototype.create = function (name) {
        return Promise.resolve(new Business(name));
    };

    var Account = function (customer, business, amt = 0) {
        this.customer = customer;
        this.business = business;
        this.amount = amt;
        this.setAmount = amt => Promise.resolve(this.amount = amt);
    };

    Account.prototype.create = function (customer, business) {
        return Promise.resolve(new Account(customer, business));
    };
    var business, businessApple;
    var customer;
    var account, accountApple;

    before(function* () {
        business = yield Business.prototype.create("FooBar Inc");
        businessApple = yield Business.prototype.create("Apple Inc");
        customer = yield Customer.prototype.create("Adam Moon");
        account = yield Account.prototype.create(customer, business);
        accountApple = yield Account.prototype.create(customer, businessApple);
    });

    it("customer should have 1 account with business of 'FooBar Inc'", function* () {
        yield customer.addAccount(account);
        expect(customer.accounts.length).to.be.equal(1);
        expect(customer.accounts[0].business.name).to.be.equal("FooBar Inc");
    });

    it("customer should have 1 account with initial balance of 0", function* () {
        expect(customer.accounts[0].amount).to.be.equal(0);
    });

    it("customer should have 2 accounts with 2nd account business being Apple", function* () {
        yield customer.addAccount(accountApple);
        expect(customer.accounts.length).to.be.equal(2);
        expect(customer.accounts[1].business.name).to.be.equal("Apple Inc");
    });

    it("business should have 1 customer", function* () {
        yield business.addCustomer(customer);
        expect(business.customers.length).to.be.equal(1);
    });

    it("businessApple should have 1 customer", function* () {
        yield businessApple.addCustomer(customer);
        expect(businessApple.customers.length).to.be.equal(1);
    });

    it("set Amount for customer's businessApple account", function* () {
        yield customer.accounts[1].setAmount(100);
        expect(customer.accounts[1].amount).to.be.equal(100);
    });
});

//# sourceMappingURL=async-test-compiled.js.map