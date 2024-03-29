// // USER CLASS CODE

// class User {
//     constructor(name, email) {
//       this.name = name;
//       this.email = email;
//       this.account = new BankAccount();
//     }

//     makeDeposit(amount) {
//       this.accountBalance += amount;
//       return this;
//     }

//     makeWithdrawal(amount) {
//       this.accountBalance -= amount;
//       return this;
//     }

//     displayBalance() {
//       console.log(`Name: ${this.name}, Account Balance: $${this.accountBalance}`);
//       return this;
//     }

//     transferMoney(user, amount) {
//         this.accountBalance -= amount;
//         user.accountBalance += amount;
//         return this;
//     }
//   }

  // const brian = new User("Brian", "bmoniz328@gmail.com");
  // const patrick = new User("Patrick", "pmoniz@123fakecompany.com");
  // const zack = new User("Zack", "zherrington@gmail.com")

// // Brian's account activity
//   brian.makeDeposit(200);
//   brian.makeDeposit(150);
//   brian.makeDeposit(85);
//   brian.makeWithdrawal(225);
//   brian.displayBalance()

// // Patrick's account activity
//   patrick.makeDeposit(130);
//   patrick.makeDeposit(450);
//   patrick.makeWithdrawal(75);
//   patrick.makeWithdrawal(50);
//   patrick.displayBalance();

// // Zack's account activity
//   zack.makeDeposit(300);
//   zack.makeWithdrawal(100);
//   zack.makeWithdrawal(40);
//   zack.makeWithdrawal(110);
//   zack.displayBalance();

  // // transfer money
  // brian.transferMoney(zack, 100);

  // // Brian and Zack's totals after successful transfer
  // brian.displayBalance();
  // zack.displayBalance();

  // console.log("Brian's chaining activity: ")

  // brian.makeDeposit(200).makeDeposit(170)
  // .makeDeposit(95).makeWithdrawal(225).displayBalance()

// BANK ACCOUNT CLASS
class BankAccount {
    constructor(interestRate = 0.05, balance = 0.00) {
        this.interestRate = interestRate;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        if (this.balance < 0) {
            console.log("Insufficient funds: Charging $5 fee");
            this.balance -= 5;
        }
        return this;
    }
    displayAccountInfo() {
        console.log(
            `Current Balance: $${this.balance}, Interest Rate: ${this.interestRate}`
        );
        return this;
    }
    yieldInterest() {
        this.balance += this.balance * this.interestRate;
        return this;
    }
}

// const bank1 = new BankAccount();
// const bank2 = new BankAccount(0.06, 200);
// bank2.withdraw(500);
// bank2.displayAccountInfo();


// USER CLASS CODE

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.account = new BankAccount();
  }

  makeDeposit(amount) {
    this.account.deposit(amount);
    return this;
  }

  makeWithdrawal(amount) {
    this.account.withdraw(amount);
    return this;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Account Balance: $${this.account.balance}, Interest Rate: ${this.account.interestRate}`);
    return this;
  }

  //transfer money function
  transferMoney(user, amount) {
      this.accountBalance -= amount;
      user.accountBalance += amount;
      return this;
  }
}

const alex = new User("Alex Smith", "Asmith123@gmail.com");

alex.account.deposit(500)
alex.account.deposit(4250) // payday!
alex.account.withdraw(1250) // pay rent :(
alex.account.displayAccountInfo()

console.log("New User Alex:", alex)


// Note: Remember now that you must use
// this.account, like so: brian.account.deposit(250)

