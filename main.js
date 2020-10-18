import { getTransactionDataFromCsv, getTransactionDataFromJson } from "./Ingester.mjs";
import { jsonDataSet, csvDataSet } from "./data.mjs";
import { AggregatableTransactionData } from "./Aggregator.mjs";

const totalTransactionData = new AggregatableTransactionData(
    getTransactionDataFromJson(jsonDataSet)         // jsonDataSet
    .concat(getTransactionDataFromCsv(csvDataSet))  // csvDataSet
)

// Groups transactions by user in alphabetical order
console.table(totalTransactionData.orderByUserName());

// Gets total spending for a single user
const spending = totalTransactionData.totalSpendingForUser('steve');
console.log(`${spending.user} spent £${spending.food.toFixed(2)} on food, £${spending.drinks.toFixed(2)} on drinks and £${spending.other.toFixed(2)} on everything else!`);

// Gets total spending for all users and presents them as a table
console.table(totalTransactionData.totalSpendingAcrossAllUsers())