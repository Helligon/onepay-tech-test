export class JsonTransaction {
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

export class CsvTransaction {
    constructor(transactionAmount, id, user, category) {
        this.transactionAmount = transactionAmount;
        this.id = id;
        this.user = user;
        this.category = category;
    }

    getTransactionAmount() { return this.transactionAmount }
    getId() { return this.id }
    getUser() { return this.user }
    getCategory() { return this.category }
}