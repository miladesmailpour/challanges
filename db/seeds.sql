INSERT INTO department (name)
VALUES
  ('Production'),
  ('HR'),
  ('Sales'),
  ('Legal'),
  ('IT');

INSERT INTO role (title, department_id, salary)
VALUES
  ('Manager', 1, 130000.00),
  ('Junior Developer', 5, 80000.00),
  ('Clerk', 2, 60000.00),
  ('Senior Developer', 5, 120000.00),
  ('Accountant', 3, 90000.00);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, NULL),
  ('David', 'Johnson', 3, NULL),
  ('Emily', 'Williams', 4, NULL),
  ('Michael', 'Brown', 5, NULL),
  ('Laura', 'Jones', 1, 1),
  ('Eric', 'Wilson', 1, 1),
  ('Emily', 'Davis', 2, 2),
  ('Matthew', 'Anderson', 2, 2),
  ('Sophia', 'Miller', 3, 3),
  ('Olivia', 'Clark', 3, 3),
  ('Daniel', 'Roberts', 4, 4),
  ('Natalie', 'Brown', 4, 4),
  ('Joshua', 'Harris', 5, 5),
  ('Amelia', 'Lee', 5, 5);