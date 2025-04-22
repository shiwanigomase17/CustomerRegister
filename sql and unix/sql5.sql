CREATE TABLE Consumers (
    ConsumerID INT PRIMARY KEY,
    ConsumerName VARCHAR(100),
    Address VARCHAR(255),
    PhoneNumber VARCHAR(15)
);

CREATE TABLE MonthlyBill (
    BillID INT PRIMARY KEY,
    ConsumerID INT,
    BillAmount DECIMAL(10,2),
    DueDate DATE,
    Paid BOOLEAN,
    FOREIGN KEY (ConsumerID) REFERENCES Consumers(ConsumerID)
);

INSERT INTO Consumers (ConsumerID, ConsumerName, Address, PhoneNumber) VALUES
(1, 'John Doe', '123 Main St', '1234567890'),
(2, 'Jane Smith', '456 Elm St', '0987654321'),
(3, 'Alice Johnson', '789 Pine St', '1231231234'),
(4, 'Bob Brown', '321 Oak St', '3213213210'),
(5, 'Charlie Davis', '654 Cedar St', '5555555555'),
(6, 'David Wilson', '987 Maple St', '6666666666'),
(7, 'Eva White', '852 Birch St', '7777777777'),
(8, 'Frank Green', '369 Spruce St', '8888888888'),
(9, 'Grace Hall', '741 Walnut St', '9999999999'),
(10, 'Harry Adams', '147 Willow St', '1010101010');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillAmount, DueDate, Paid) VALUES
(1, 1, 500.00, '2025-06-15', TRUE),
(2, 2, 750.00, '2025-06-15', FALSE),
(3, 3, 300.00, '2025-06-15', TRUE),
(4, 4, 450.00, '2025-06-15', FALSE),
(5, 5, 600.00, '2025-06-15', TRUE),
(6, 6, 550.00, '2025-06-15', FALSE),
(7, 7, 700.00, '2025-06-15', TRUE),
(8, 8, 800.00, '2025-06-15', FALSE),
(9, 9, 250.00, '2025-06-15', TRUE),
(10, 10, 900.00, '2025-06-15', FALSE);

SELECT ConsumerID, ConsumerName 
FROM Consumers
WHERE ConsumerID IN (
    SELECT ConsumerID FROM MonthlyBill WHERE Paid = FALSE
);