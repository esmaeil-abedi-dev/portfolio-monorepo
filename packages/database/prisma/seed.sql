-- Create admin user
INSERT INTO User (id, name, email, password, role, createdAt, updatedAt)
VALUES ('clu0123456789', 'Admin User', 'admin@example.com', 'admin123', 'admin', datetime('now'), datetime('now'));
