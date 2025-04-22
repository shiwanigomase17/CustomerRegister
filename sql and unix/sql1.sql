CREATE TABLE Customer (
    ConsumerID BIGINT PRIMARY KEY, -- 13-digit integer
    CustomerName VARCHAR(50) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    MobileNumber VARCHAR(15) NOT NULL UNIQUE, -- Assuming max 15 digits for phone numbers
    UserID VARCHAR(20) NOT NULL UNIQUE CHECK (LENGTH(UserID) >= 5 AND LENGTH(UserID) <= 20),
    Password VARCHAR(30) NOT NULL,
    ConfirmPassword VARCHAR(30) NOT NULL CHECK (Password = ConfirmPassword),
    Status ENUM('Active', 'Inactive') NOT NULL
);

INSERT INTO Customer (ConsumerID, CustomerName, Email, MobileNumber, UserID, Password, ConfirmPassword, Status) VALUES
(1234567890123, 'John Doe', 'john.doe@email.com', '9876543210', 'JohnD123', 'SecurePass1', 'SecurePass1', 'Active'),
(2345678901234, 'Jane Smith', 'jane.smith@email.com', '8765432109', 'JaneS2025', 'MyPassword123', 'MyPassword123', 'Inactive'),
(3456789012345, 'Alex Brown', 'alex.brown@email.com', '7654321098', 'AlexB5678', 'PassBrown78', 'PassBrown78', 'Active'),
(4567890123456, 'Emily Clark', 'emily.clark@email.com', '6543210987', 'EmilyC989', 'ClarkEmily321', 'ClarkEmily321', 'Active'),
(5678901234567, 'Michael Lee', 'michael.lee@email.com', '5432109876', 'MikeL22', 'LeePass567', 'LeePass567', 'Inactive');