// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// 1.from previous task1 already have db 
// 2.requirement is order of staff jane doe by
//  order date so manager want to see only order and placed time
// 3. check collection what it look
use('chrome-burger-db');
/// see order collection
//\db.orders.findOne();
// see staff collection
///db.staff.findOne()
/// jane doe is cashier that why hint is total_price is require
///now let find by order collection
db.orders.find(
        {   ////staff name in side staff///first_name not firstname
            "staff.first_name":"Jane",
            "staff.last_name":"Doe"
        },
        {
            _id:0,
            total_price:1,
            order_date:1
        }

    )//.count() //only by name jane =8 
