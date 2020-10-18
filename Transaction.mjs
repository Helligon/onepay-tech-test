export class Transaction {
    constructor(id, user, transactionAmount, category) {
        this.id = id;
        this.user = user;
        this.transactionAmount = transactionAmount;
        this.category = category;
    }

    getId() { return this.id }
    getUser() { return this.user }
    getTransactionAmount() { return this.transactionAmount }
    getCategory() { return this.category }
}
