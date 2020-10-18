import { Transaction } from "./Transaction.mjs";

/**
 * Creates an array of transaction data from a JSON array
 * @param {Array<T>} data - Data collection to parse.
 * @return {Array<Transaction>} Returns a transaction array of all transactions.
 */
export function getTransactionDataFromJson(data) {
    return standardiseData(data.map(({ id, user, transactionAmount, category }) => 
        new Transaction(
            id,
            user.toLowerCase(),
            transactionAmount,
            category
        )
    ))
}

/**
 * Creates an array of transaction data from a CSV file
 * @param {string} data - Data collection to parse.
 * @return {Array<Transaction>} Returns a transaction array of all transactions.
 */
export function getTransactionDataFromCsv(data) {
    const userTransactions = data.split('\r\n').filter(Boolean).reverse();
    userTransactions.pop();
    
    return standardiseData(userTransactions.map(dataRow => {
        const data = dataRow.split(',');
        return new Transaction(
            data[1], // id
            data[2], // user
            data[0], // transactionAmount
            data[3], // category
        );
    }));
}

/**
 * Standardises a collection of transaction data.
 * @param {Array<Transaction>} data - Data collection to standardise.
 * @return {Array<Transaction>} Returns an array of standardised transactions.
 */
function standardiseData(data) {
    for (const transaction of data) {
        const { transactionAmount } = transaction;

        transaction.setUser(transaction.user.toLowerCase());

        if (transactionAmount === "-") {
            transaction.setTransactionAmount(0);
        } else {
            transaction.setTransactionAmount(Number(transactionAmount))
        }

        if (transaction.category === 'misc') {
            transaction.setCategory('other');
        }
    }

    return data;
}