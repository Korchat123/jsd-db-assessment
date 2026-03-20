// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// 1.requirement list all strock equal or greater 100
// 2. like taskbefore let see real collection
    use('chrome-burger-db')

   // db.ingredients.findOne(); have strock_level
// 3. now if we are chef see it have to have name and storck level

    db.ingredients.find(
        {
            ///check first gte  syntax is work
            stock_level: {$gte:100 } ///work
        }
    ///now scope down to only show name and stock level
    ,{  _id:0,
        name:1,
        stock_level:1
    }
)