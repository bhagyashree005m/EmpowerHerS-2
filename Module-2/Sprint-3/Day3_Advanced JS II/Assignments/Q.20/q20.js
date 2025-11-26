
// Question 1: Closure-Based Counter

function createCounter() {
    let count = 0; // private variable

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        getCount: function () {
            return count;
        }
    };
}

// Example Usage of Counter
const counter1 = createCounter();
counter1.increment(); // Output: Current count: 1
counter1.increment(); // Output: Current count: 2
counter1.decrement(); // Output: Current count: 1

const counter2 = createCounter();
counter2.increment(); // Output: Current count: 1 (independent counter)



// Question 2: Closure-Based Bank Account

function createBankAccount() {
    let balance = 0; // private variable
    let transactionHistory = []; // private transaction log

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log("Deposited:", amount);
        },
        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log("Withdrawn:", amount);
            } else {
                transactionHistory.push(`Failed withdrawal: ${amount}`);
                console.log("Insufficient balance");
            }
        },
        checkBalance: function () {
            console.log("Current balance:", balance);
            return balance;
        },
        getTransactionHistory: function () {
            return [...transactionHistory]; // return a copy
        }
    };
}

// Example Usage of Bank Account
const account = createBankAccount();
account.deposit(500);   // Output: Deposited: 500
account.withdraw(200);  // Output: Withdrawn: 200
account.withdraw(400);  // Output: Insufficient balance
console.log(account.balance); // Output: undefined (private!)
console.log(account.getTransactionHistory());
// Output: [ 'Deposited: 500', 'Withdrawn: 200', 'Failed withdrawal: 400' ]
