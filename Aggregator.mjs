import { SpendingData } from "./Transaction.mjs";

export class AggregatableTransactionData {
    constructor(transactionData) {
        this.transactionData = transactionData;
    }

    orderByUserName() {
        return this.transactionData.sort((current, comparitor) => current.user.localeCompare(comparitor.user));
    }
    
    totalTransactionsfor(user) {
        return this.transactionData.filter(transaction => transaction.user === user);
    }

    /**
     * Returns an object describing the spending of a user 
     * @param {string} user User to query data by
     */
    totalSpendingForUser(user) {
        const transactionsForUser = this.totalTransactionsfor(user.toLowerCase());
        let spending = {
            food: 0,
            drinks: 0,
            other: 0
        }

        const ids = [];
        for (const { id, _user, transactionAmount, category } of transactionsForUser) {
            if (ids.includes(id)) {
                continue;
            }
            ids.push(id);
            spending[category] += transactionAmount;
        }

        return new SpendingData(
            user,
            spending.food,
            spending.drinks,
            spending.other
        );
    }

    totalSpendingAcrossAllUsers() {
        let spendingTable = [];

        for (const user of this.getListOfUsers()) {
            spendingTable.push(this.totalSpendingForUser(user));
        }

        return spendingTable;
    }

    getListOfUsers() {
        return Array.from(new Set(this.transactionData.map(row => row.user)));
    }
}
