-- Task 1: Sides Menu Board
-- The owner wants to update the printed menu board that displays only the side dishes.
-- They need a list of every item in the 'Side' category along with its current price,
-- so the designer can produce an accurate board without having to check each item manually.
--
-- Hint: Write a query to find the name and price of all menu items that are in the 'Side' category.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task1_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- //create db mock-db-sql from aiven
--//run all query from initialize_database start from create_tables
-- let start task
-- 1. requiment name of item that have category side and price this should be from menu_item
-- 2.see er from visualize postgre menu item already have column that needed
-- 3. see what menuitems table look like
  -- SELECT* from menuitems limit 10;
---4. let see select column from table where column category= 'side'
 SELECT name , price from  menuitems where category='Side';