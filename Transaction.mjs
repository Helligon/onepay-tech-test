export class Transaction {
  constructor(id, user, transactionAmount, category) {
    this.id = id;
    this.user = user;
    this.transactionAmount = transactionAmount;
    this.category = category;
  }

  getId() { return this.id; }
  getUser() { return this.user; }
  getTransactionAmount() { return this.transactionAmount; }
  getCategory() { return this.category; }

  /**
   * User setter
   * @param {string} newUser User to set user property to
   */
  setUser(newUser) {
    this.user = newUser;
  }

  /**
   * Transaction amount setter
   * @param {Number} newAmount Amount to set transactionAmounnt property to
   */
  setTransactionAmount(newAmount) {
    this.transactionAmount = newAmount;
  }

  /**
   * Category setter
   * @param {string} newCategory Category to set category property to
   */
  setCategory(newCategory) {
    this.category = newCategory;
  }
}

export class SpendingData {
    constructor(user, food, drinks, other) {
        this.user = user;
        this.food = food;
        this.drinks = drinks;
        this.other = other;
    }

    getUser() { return this.user }
    getFood() { return this.food }
    getDrinks() { return this.drinks }
    getOther() { return this.other }
}
