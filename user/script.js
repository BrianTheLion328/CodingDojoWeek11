class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.accountBalance = 0;
    }

    makeDeposit(amount) {
      this.accountBalance += amount;
    }

    makeWithdrawal(amount) {
      this.accountBalance -= amount;
    }

    displayBalance() {
      console.log(`Name: ${this.name}, Account Balance: $${this.accountBalance}`);
    }

    transferMoney(user, amount) {
        this.accountBalance -= amount;
        user.accountBalance += amount;
    }
  }

  const brian = new User("Brian", "bmoniz328@gmail.com");
  const patrick = new User("Patrick", "pmoniz@123fakecompany.com");
  const zack = new User("Zack", "zherrington@gmail.com")

// Brian's account activity
  brian.makeDeposit(200);
  brian.makeDeposit(150);
  brian.makeDeposit(85);
  brian.makeWithdrawal(225);
  brian.displayBalance()

// Patrick's account activity
  patrick.makeDeposit(130);
  patrick.makeDeposit(450);
  patrick.makeWithdrawal(75);
  patrick.makeWithdrawal(50);
  patrick.displayBalance();

// Zack's account activity
  zack.makeDeposit(300);
  zack.makeWithdrawal(100);
  zack.makeWithdrawal(40);
  zack.makeWithdrawal(110);
  zack.displayBalance();

  // transfer money
  brian.transferMoney(zack, 100);

  // Brian and Zack's totals after successful transfer
  brian.displayBalance();
  zack.displayBalance();
