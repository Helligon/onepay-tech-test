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

        for (const { _id, _user, transactionAmount, category } of transactionsForUser) {
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

        const uniqueUsers = Array.from(new Set(this.transactionData.map(row => row.user)))

        for (const user of uniqueUsers) {
            spendingTable.push(this.totalSpendingForUser(user));
        }

        return spendingTable;
    }
}
