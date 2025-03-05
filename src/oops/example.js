/**
 *  JavaScript supports Object-Oriented Programming (OOP) concepts,
 *  but it follows a prototype-based approach rather than a class-based one like Java or C++.
 *  However, with the introduction of ES6 classes, JavaScript provides a more familiar syntax for OOP.
 * 
 *  1) Class
 *  2) Object
 *  3) Encapsulation
 *  4) Abstraction
 *   5) Inheritance
 * 6) POLYMORPHISM
 */


/** 
 * CLASS @MyAccount
 *
 *## class is like a bluprint have set properties and methods 
 *### (#)-> represents the private property or methods, This only accessible within the class scope, we can't access with objects 
  ###  (_) -> represents protected protected property can access within the class and inherited classes
 *  */ 
class MyAccount {
    /** These are all class properties */ 
    /***
     * ENCAPSULATION: - Hiding the confidential and logic and method
     */
  #user_name;
  #password;
  _account_no;
  #balance;
  current_balance;
  incom_and_expernse = [];
  constructor(_account_details) {
    this.#setup_account_details(_account_details);
  }

/**
 * ###  This is methods of this class 
 * */
  #setup_account_details(account_details) {
    this._account_no = account_details.account_no;
    this.#user_name = account_details.user_name;
    this.#password = account_details.password;
    this.#balance = account_details.amount;
    this.current_balance = account_details.amount;
    // this.incom_and_experns = []
    this.#update_income_and_expense(this.current_balance);
  }

  get_user_details() {
    return {
      name: this.#user_name,
      account_no: this._account_no,
    };
  }

  get_current_balance() {
    return this.#balance;
  }
  get user_name() {
    console.log("Getter logged");
    return this.#user_name;
  }

  credit_or_debit_to_ac(amount) {
    if (this.constructor.name === "MyAccount")
      throw new Error(
        "This method only can accssible for Income and Expense class"
      );
    console.log("this >>>>>>", this);
    if (this.constructor.name == "Income") this.current_balance += amount;
    else this.current_balance -= amount;

    console.log(
      `${this.constructor.name} amount ${amount} added to ${
        this.#user_name
      } AC No ${this._account_no}`
    );
    this.#update_income_and_expense(amount);
  }
  #update_income_and_expense(amount) {
    console.log("update_income_and_expense", amount);
    this.incom_and_expernse.push({
      type: this.constructor.name,
      amount: amount,
      current_balance: this.current_balance,
      time: new Date().toISOString(),
    });
    this.#balance = this.current_balance;
  }
  get_report() {
    console.log(`${this.constructor.name} Report`, this.incom_and_expernse);
  }
}


/**
 * INHERITANCE
 */
class Income extends MyAccount {
  constructor(acc_detials) {
    super(acc_detials);
  }
  salary(amount) {
    this.credit_or_debit_to_ac(amount);
  }

  bank_intrest(amount) {
    this.credit_or_debit_to_ac(amount);
  }

  get_report() {
    console.log(
      `${this.constructor.name} Report`,
      this.incom_and_expernse.filter((f) => f.type === this.constructor.name)
    );
  }
}

class Expense extends MyAccount {
  constructor(acc_detials) {
    super(acc_detials);
  }
  home_rent(amount) {
    this.credit_or_debit_to_ac(amount);
  }

  monthly_emi(amount) {
    this.credit_or_debit_to_ac(amount);
  }
  get_report() {
    console.log(
      `${this.constructor.name} Report`,
      this.incom_and_expernse.filter((f) => f.type === this.constructor.name)
    );
  }
}



const user_ac_detials = {
    user_name: "Jack",
    password: "user@123",
    account_no: "123456",
    amount: 10000,
  }

/**
 * OBJECT -> @my_account @income @expense
 * creating the instance (objects) for class , can access the all property and methods via objects
 * 
 * @Inheritance
 * @MyAccount -> Parent class
 * @Income -> Child class of MyAccount class 
 * @Expense -> Child class of MyAccount class
 */  
const my_account = new MyAccount(user_ac_detials);
const income = new Income(user_ac_detials);
const expense = new Expense(user_ac_detials);

income.salary(10000);
income.bank_intrest(2000);

expense.home_rent(4000);
expense.home_rent(4000);


/***
 *POLYMORPHISM @Polymorphism
 * method override with the same in Parent and child class, can modify the logic in the mothod context  
 */
my_account.get_report();
income.get_report();
expense.get_report();
