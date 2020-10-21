import { getTransactionDataFromCsv, getTransactionDataFromJson } from "./Ingester.mjs";
import { jsonDataSet, csvDataSet } from "./data.mjs";
import { AggregatableTransactionData } from "./Aggregator.mjs";

const totalTransactionData = new AggregatableTransactionData(
    getTransactionDataFromJson(jsonDataSet)
    .concat(getTransactionDataFromCsv(csvDataSet))
);

const toSentence = ({ user, food, drink, other }) => `${user} spent £${food.toFixed(2)} on food, £${drink.toFixed(2)} on drink and £${other.toFixed(2)} on everything else!`;

// Groups transactions by user in alphabetical order
console.table(totalTransactionData.orderByUserName());

// Gets total spending for a single user
console.log(toSentence(totalTransactionData.totalSpendingForUser('steve')));

// Gets total spending for all users and presents them as a table
console.table(totalTransactionData.totalSpendingAcrossAllUsers());

// What everyone spent on individually
totalTransactionData.getListOfUsers().forEach(user => 
    console.log(toSentence(totalTransactionData.totalSpendingForUser(user))));