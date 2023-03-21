# Write your MySQL query statement below
# https://leetcode.com/problems/customers-who-never-order/?envType=study-plan&id=sql-i

select customers.name as 'Customers'
from customers
where customers.id not in
(
    select customerid from orders
);

SELECT Name AS 'Customers'
FROM Customers c
LEFT JOIN Orders o
ON c.Id = o.CustomerId
WHERE o.CustomerId IS NULL
