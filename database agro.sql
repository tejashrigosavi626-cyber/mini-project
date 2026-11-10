CREATE DATABASE IF NOT EXISTS agrosmart
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE agrosmart;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('farmer','buyer','admin') NOT NULL DEFAULT 'farmer',
    phone VARCHAR(30),
    location VARCHAR(150),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM users;

CREATE TABLE IF NOT EXISTS crops (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE IF NOT EXISTS listings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NOT NULL,
    crop_name VARCHAR(100) NOT NULL,
    quantity_kg DECIMAL(12,2) NOT NULL,
    price_per_kg DECIMAL(12,2) NOT NULL,
    location VARCHAR(150) NOT NULL,
    quality VARCHAR(50) DEFAULT 'Grade A',
    harvest_date DATE,
    status ENUM('active','sold','cancelled') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (farmer_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    listing_id INT NOT NULL,
    buyer_id INT NOT NULL,
    farmer_id INT NOT NULL,
    quantity_kg DECIMAL(12,2) NOT NULL,
    total_amount DECIMAL(14,2) NOT NULL,

    status ENUM(
        'placed',
        'accepted',
        'packed',
        'dispatched',
        'delivered',
        'cancelled'
    ) DEFAULT 'placed',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (listing_id)
    REFERENCES listings(id),

    FOREIGN KEY (buyer_id)
    REFERENCES users(id),

    FOREIGN KEY (farmer_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS soil_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NOT NULL,
    nitrogen DECIMAL(10,2),
    phosphorus DECIMAL(10,2),
    potassium DECIMAL(10,2),
    ph DECIMAL(5,2),
    moisture DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (farmer_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS market_prices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    crop_name VARCHAR(100) NOT NULL,
    market_name VARCHAR(150) NOT NULL,
    price_per_kg DECIMAL(12,2) NOT NULL,
    recorded_on DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,

    severity ENUM(
        'info',
        'warning',
        'critical'
    ) DEFAULT 'info',

    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (farmer_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    reviewer_id INT NOT NULL,
    rating INT NOT NULL,
    comment VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (order_id)
    REFERENCES orders(id),

    FOREIGN KEY (reviewer_id)
    REFERENCES users(id)
);

INSERT INTO crops (name, description)
VALUES
('Rice','Warm-season cereal crop'),
('Wheat','Cool-season cereal crop'),
('Cotton','Commercial fiber crop'),
('Onion','Bulb vegetable crop'),
('Banana','Fruit crop'),
('Sugarcane','Commercial sugar crop')
ON DUPLICATE KEY UPDATE
description = VALUES(description);
SELECT * FROM crops;

INSERT INTO market_prices
(crop_name, market_name, price_per_kg, recorded_on)
VALUES
('Onion','Nashik',24.00,CURDATE()),
('Onion','Pune',26.00,CURDATE()),
('Onion','Mumbai',28.00,CURDATE()),
('Rice','Nashik',42.00,CURDATE()),
('Wheat','Pune',32.00,CURDATE()),
('Cotton','Akola',72.00,CURDATE());
SELECT * FROM market_prices;


CREATE TABLE IF NOT EXISTS crop_recommendations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NOT NULL,
    soil_type VARCHAR(50) NOT NULL,
    season VARCHAR(50) NOT NULL,
    recommended_crop VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (farmer_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS fertilizer_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NOT NULL,
    nitrogen DECIMAL(10,2),
    phosphorus DECIMAL(10,2),
    potassium DECIMAL(10,2),
    recommendation VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (farmer_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS irrigation_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NOT NULL,
    moisture DECIMAL(10,2),
    recommendation VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (farmer_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS profit_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NOT NULL,
    crop_name VARCHAR(100) NOT NULL,
    quantity_kg DECIMAL(12,2) NOT NULL,
    price_per_kg DECIMAL(12,2) NOT NULL,
    total_revenue DECIMAL(14,2) NOT NULL,
    total_cost DECIMAL(14,2) NOT NULL,
    profit DECIMAL(14,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (farmer_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);