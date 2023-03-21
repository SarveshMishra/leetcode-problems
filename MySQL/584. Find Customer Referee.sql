# Write your MySQL query statement below
# https://leetcode.com/problems/find-customer-referee/?envType=study-plan&id=sql-i

select name from Customer where referee_id != 2 or referee_id  is null;
