import { getTransactionDataFromCsv } from "./Ingester.mjs";
import { csvDataSet } from "./data.mjs";

console.log(getTransactionDataFromCsv(csvDataSet));