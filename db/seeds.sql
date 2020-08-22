INSERT INTO department (name)
VALUES
('Sales'), ('Engineering'), ('Finance'), ('Legal'), ('HR'), ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES 
('sales lead', 60000, 1),
('lead engineer', 150000, 2),
('accountant', 80000, 3),
('lawyer', 180000, 4),
('HR specialist', 50000, 5), 
('consultant', 90000, 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('Virginia', 'Woolf', 2),
('Ronald', 'Firbank', 1),
('Piers', 'Gaveston', 3),
('Charles', 'LeRoi', 4),
('Katherine', 'Mansfield', 5),
('Dora', 'Carrington', 6);
