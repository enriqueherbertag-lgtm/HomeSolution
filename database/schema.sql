-- HomeSolution Database Schema
-- Versión: 1.0

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    user_type VARCHAR(20) CHECK (user_type IN ('client', 'technician')),
    full_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE technicians (
    user_id INTEGER PRIMARY KEY REFERENCES users(id),
    category VARCHAR(100)[],
    rating DECIMAL(3,2) DEFAULT 0.00,
    total_jobs INTEGER DEFAULT 0,
    is_available BOOLEAN DEFAULT false,
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8)
);

CREATE TABLE service_requests (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES users(id),
    technician_id INTEGER REFERENCES users(id),
    category VARCHAR(100),
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    price_estimate DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para mejor performance
CREATE INDEX idx_technicians_location ON technicians(latitude, longitude);
CREATE INDEX idx_requests_status ON service_requests(status);
CREATE INDEX idx_requests_client ON service_requests(client_id);
