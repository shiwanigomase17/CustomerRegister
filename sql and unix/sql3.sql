CREATE TABLE Customer (
    CustomerId INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    Email VARCHAR(100)
);

INSERT INTO Customer (CustomerId, CustomerName, Email) VALUES
(1, 'Alicia', 'alicia@example.com'),
(2, 'Barbara', 'barbara@example.com'),
(3, 'Sonia', 'sonia@example.com'),
(4, 'Martha', 'martha@example.com'),
(5, 'Julia', 'julia@example.com');

SELECT CustomerId, CustomerName, Email
FROM Customer
WHERE CustomerName LIKE '%a'
ORDER BY CustomerName DESC;