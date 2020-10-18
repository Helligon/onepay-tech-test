import { Transaction } from "./Transaction.mjs";

/**
 * Fetches an array of transaction data for a single user from a JSON array
 * @param {Array<T>} data - Data collection to parse.
 * @return {Array<Transaction>} Returns an object of all transactions for a specific user.
 */
export function getTransactionDataFrom(data) {
    return data.map(dataRow => new Transaction(...dataRow));
}

/**
 * Fetches an array of transaction data for a single user from a CSV file
 * @param {string} data - Data collection to parse.
 * @return {Array<JsonTransaction>} Returns an object of all transactions for a specific user.
 */
export function getTransactionDataFromCsv(data) {
    const userTransactions = data.split('\r\n').filter(Boolean).reverse();
    userTransactions.pop();
    
    return userTransactions.map(dataRow => {
        const data = dataRow.split(',');
        return new Transaction(data[1], data[2], data[0], data[3]);
    })
}
