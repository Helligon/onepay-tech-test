import { SpendingData } from "./Transaction.mjs";

export class AggregatableTransactionData {
    constructor(transactionData) {
        this.transactionData = transactionData;
    }

    /**
     * Returns the collection of transactions ordered by name of user
     * @return {AggregatableTransactionData} Returns AggregatableTransactionData
     */
    orderByUserName() {
        return this.transactionData.sort((current, comparitor) => current.user.localeCompare(comparitor.user));
    }
    

    /**
     * Returns an array of all transactions for a user 
     * @param {string} user User to query data by
     * @return {AggregatableTransactionData} Returns AggregatableTransactionData
     */
    totalTransactionsfor(user) {
        return this.transactionData.filter(transaction => transaction.user === user);
    }

    /**
     * Returns an object describing the spending of a user 
     * @param {string} user User to query data by
     * @return {SpendingData} Returns SpendingData
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

    /**
     * Compiles an array of users and their spending on each category
     * @return {Array<SpendingData>} Returns an array of each users spending
     */
    totalSpendingAcrossAllUsers() {
        return this.getListOfUsers().map(user => this.totalSpendingForUser(user));
    }

    /**
     * Gets a list of all unique users
     * @return {Array<string>} Returns a list of users
     */
    getListOfUsers() {
        return Array.from(new Set(this.transactionData.map(row => row.user)));
    }
}
