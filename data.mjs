// Data Aggregation - Short Test
//     You are given two sets of data from two different systems.
//     The aim is to output the total amount of money spent per user per category, EG Steve spent £x.xx on food and £y.yy on drinks
//     The datasets don't use the same naming and value logic so you will need to handle this in code (you can't change the data sets).
// Treat "-" as 0 in transactionAmount
export const jsonDataSet = [
    {id: "123-456", user: "steve", transactionAmount: 13.4, category: "food"},
    {id: "43-456", user: "kelly", transactionAmount: 124, category: "food"},
    {id: "4565-3", user: "steve", transactionAmount: -12.4, category: "food"},
    {id: "573-383", user: "robert", transactionAmount: 5.4, category: "food"},
    {id: "148-403", user: "anne", transactionAmount: "-", category: "food"},
    {id: "381-493", user: "anne", transactionAmount: 50, category: "drink"},
    {id: "373-301", user: "anne", transactionAmount: 30, category: "drink"},
    {id: "1111-49", user: "robert", transactionAmount: "-", category: "drink"},
    {id: "4891-30", user: "kelly", transactionAmount: 9, category: "drink"},
    {id: "5719", user: "steve", transactionAmount: 200, category: "other"},
    {id: "1820-329", user: "roger", transactionAmount: 30, category: "other"},
    {id: "473-301", user: "roger", transactionAmount: 32, category: "other"},
];
// This is a CSV encoded file.
// Treat balanceAdjustment as transactionAmount from dataSet1
// Treat uuid as id, sometimes ids are duplicated, so if an id appears more than once, use only the _first_ row.
// Treat customer as user, lowercase before matching.
// Treat group as category, "misc" is the same as "other" when comparing with dataSet1
export const csvDataSet = "balanceAdjustment,uuid,customer,group\r\n0,46b3c5ef-cfac-456d-bb31-e8f9a3d80c2f,STEVE,food\r\n100,cce91905-e7cb-46e8-b93f-b9cf10678e2f,KELLY,food\r\n60,2c00a840-52e8-4482-8197-5212ba255554,STEVE,food\r\n0,2c00a840-52e8-4482-8197-5212ba255554,STEVE,food\r\n18,3931c272-a442-432f-9c92-33a3307bb4b9,ROBERT,food\r\n400,844bb6cb-d0ad-411a-89d2-37e25bdba754,ANNE,food\r\n60,f855dd1e-4ef7-482d-b698-5b76e7dfc9b9,ANNE,drinks\r\n60,4c2436eb-27d0-4ea7-b25e-5308d69dafd6,ANNE,drinks\r\n26.8,4b99cade-fdcb-428f-b7bb-0b932dcdafa9,ROBERT,drinks\r\n248,f696f690-1a24-40bc-89f4-98d0a39c35ef,KELLY,drinks\r\n-24.8,051d963b-3b39-463b-a712-c08cbaafa43f,STEVE,misc\r\n-24.8,4155460f-21a9-43e1-a693-3b0eae7f3032,AMBER,misc\r\n10.8,4155460f-21a9-43e1-a693-3b0eae7f3032,AMBER,misc\r\n\r\n";
// @todo: Your code here.
// Follow SOLID Design Principles where possible.
// You can use open source libraries from npm/yarn.