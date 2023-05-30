INSERT INTO department (id, name)
VALUES (01, "Marketing"),
       (02, "Human Resources"),
       (03, "Research and Development"),
       (04, "Sales"),
       (05, "Operations");

INSERT INTO role (title, salary, department_id)
VALUES ("Digital Marketing Manager", 75000.00, 01),
       ("Talent Acquisition Specialist", 55000.00, 02),
       (" Product Development Engineer", 95000.00, 03),
       ("Account Executive", 70000.00, 04),
       ("Supply Chain Manager", 110000.00, 05);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Emma", "Johnson", 01, 11),
       ("Benjamin", "Anderson", 02, 14),
       ("Olivia", "Martinez", 03, 16),
       ("Ethan", "Thompson", 04, 12),
       ("Sophia", "Davis", 05, 19);
       