// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// 1. requirement so owner want total sum of all order
//2. check order collection again 
use("chrome-burger-db")

//db.orders.findOne();
///now sum of total price should work check again 14+12.5+5+2.5=34 ok
///$sum in aggreate
db.orders.aggregate([
    {
        ///mean it have to group _id:null use all then sum using feild total_price put result in total_revenue
        $group: {
          _id: null,
          total_revenue: {
            $sum:"$total_price"
          }
        }
    },{ ///then use project to show only total_revenue 
        $project: {
          _id:0,
          total_revenue:1
        }
    }

])