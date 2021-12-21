class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.accountBalance = 0;
    }

    makeDeposit(amount) {
      this.accountBalance += amount;
    }

    makeWithdrawl(amount) {
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

  const brian = new User("Brian Moniz", "bmoniz328@gmail.com");
  const patrick = new User("Patrick Moniz", "pmoniz@123fakecompany.com");
  const zack = new User("Zack Herrington", "zherrington@gmail.com")

// Brian's account activity
  brian.makeDeposit(200);
  brian.makeDeposit(150);
  brian.makeDeposit(85);
  brian.makeWithdrawl(225);

  console.log("Brian's balance: ", brian.accountBalance)

// Patrick's account activity
  patrick.makeDeposit(130);
  patrick.makeDeposit(450);
  patrick.makeWithdrawl(75);
  patrick.makeWithdrawl(50);

  console.log("Patrick's balance: ", patrick.accountBalance)

// Zack's account activity
  zack.makeDeposit(300);
  zack.makeWithdrawl(100);
  zack.makeWithdrawl(40);
  zack.makeWithdrawl(110);

  console.log("Zack's balance: ", zack.accountBalance)

  // transfer money
  brian.transferMoney(zack, 100);

  console.log(brian.accountBalance)
  console.log(zack.accountBalance)
