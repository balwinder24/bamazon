USE bamazon_db;
INSERT INTO products (product_name, depart_name, price, stock, createdAt, updatedAt)
VALUES('Laptop', 'Electronics', 1300, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
('Lamp', 'Electronics', 10, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
('Shirt', 'Clothing', 5, 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);