CREATE TABLE Customers (
    ConsumerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Address TEXT,
    City VARCHAR(50),
    Bill DECIMAL(10,2)
);

INSERT INTO Customers (ConsumerID, Name, Address, City, Bill) VALUES
(1, 'John Doe', '123 Main St', 'Mumbai', 500.75),
(2, 'Jane Smith', '456 Oak Rd', 'Delhi', 1200.50),
(3, 'Alice Brown', '789 Pine Ave', 'Mumbai', 800.30),
(4, 'Bob White', '321 Elm St', 'Delhi', 900.00),
(5, 'Charlie Black', '654 Maple Dr', 'Bangalore', 750.20),
(6, 'David Green', '987 Willow St', 'Mumbai', 650.90),
(7, 'Eve Adams', '741 Cedar Ln', 'Bangalore', 1400.75),
(8, 'Frank Harris', '852 Birch Blvd', 'Delhi', 1050.40),
(9, 'Grace Johnson', '963 Walnut Ct', 'Mumbai', 1100.10),
(10, 'Henry Wilson', '159 Spruce Way', 'Bangalore', 1150.80);

SELECT City, AVG(Bill) AS Average_Bill
FROM Customers
GROUP BY City
ORDER BY Average_Bill DESC;