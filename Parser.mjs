import { CsvTransaction, JsonTransaction } from "./Transaction.mjs";

/**
 * Fetches an array of transaction data for a single user from a JSON array
 * @param {Array<JsonTransaction>} data - Data collection to parse.
 * @param {string} user - User to gather transaction data for.
 * @return {Array<JsonTransaction>} Returns an object of all transactions for a specific user.
 */
export function getJsonTransactionDataForUser(data, user) {
    data.reduce((userTransactions, dataRow) => dataRow.user === user 
        ? userTransactions.concat(dataRow)
        : userTransactions
    , []);
}

/**
 * Fetches an array of transaction data for a single user from a CSV file
 * @param {string} data - Data collection to parse.
 * @param {string} user - User to gather transaction data for.
 * @return {Array<JsonTransaction>} Returns an object of all transactions for a specific user.
 */
export function getCsvTransactionDataForUser(data, user) {
    const userTransactions = data.split('\r\n').filter(Boolean).reverse();
    userTransactions.pop();
    const dataAsJson = [];
    for (const dataRow of userTransactions) {
        const data = dataRow.split(',');
        console.log('data: ', data)
        if (data[2].toLowerCase() === user) {
            dataAsJson.push(new CsvTransaction(...data))
        }
    }
    console.log('userTransactions: ', userTransactions)
    console.log('dataAsJson: ', dataAsJson)
}
