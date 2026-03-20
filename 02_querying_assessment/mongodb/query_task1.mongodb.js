// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// 1. requiment menu item that price lower that $10.00
// 2. to check must have data base to query
// 3. run mock data in mock-db_nosql
// 4. get db on mongodb sever now start query
//5. call document use
use('chrome-burger-db')
//6. check it work or not let fetch all data from collection first
//db.menu_items.find();
///7. work now let do assessment have price field already 
// so not have to use arggregrate lookup just normal query is enough
db.menu_items.find(
        { 

            price:{$lt:10.00} ///now got all data but have show only name and price
        }
        ,
        {   _id:0,
            name:1,
            price:1

        }
    )
