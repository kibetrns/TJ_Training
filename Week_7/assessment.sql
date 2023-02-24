/*Question 1*/
CREATE DATABASE TJ_Dojo;
use TJ_Dojo;


CREATE TABLE employees(employee_id int PRIMARY KEY , sale_id int FOREIGN KEY,  full_Name varchar(99, email_Address varchar(99), phoneNumber varchar(20), d.o.b date  );
CREATE TABLE sales( sale_id int PRIMARY KEY, sale_name varchar(99), sale_date date );



SELECT *
FROM employees
LEFT OUTER JOIN sales ON sales.sale_id = employees.sale_id
WHERE sales.sale_id = NULL;



/*Question 2*/

SELECT Country, NumCustomers
FROM (
  SELECT Country, COUNT(CustomerID) AS NumCustomers
  FROM Customers
  GROUP BY Country
) AS CustomerCount
WHERE NumCustomers > 3
ORDER BY NumCustomers DESC;


/*Question 3*/

CREATE PROCEDURE updateOrInsertEmployee(
    @employee_id int,
    @sale_id int,
    @full_name varchar(99),
    @email_adderss varchar(99),
    @phone_number varchar(99),
    @dob DATE 
)

AS
BEGIN
  IF EXISTS (SELECT * FROM employees WHERE employee_id = @employee_id)
  BEGIN
    UPDATE employees SET 
      sale_id = @sale_id, 
      full_name = @full_name,
      email_address = @email_address,
      phone_number = @phone_number,
      dob = @dob
    WHERE employee_id = @employee_id;
  END
  ELSE
  BEGIN
    INSERT INTO employees (
      employee_id,
      sale_id,
      full_name,
      email_address,
      phone_number,
      dob
    ) VALUES (
      @employee_id,
      @sale_id,
      @full_name,
      @email_address,
      @phone_number,
      @dob
    );
  END
END;

/*Question 4*/
INSERT INTO employees(employee_id, sale_id, full_name, email_address, phone_Number)
VALUES (1, 119, "John Doe", "john@example.com", 234556677889);

INSERT INTO employees(employee_id, sale_id, full_name, email_address, phone_Number)
VALUES (2, 110, "John Doe", "john@example.com", 234556677889);

INSERT INTO employees(employee_id, sale_id, full_name, email_address, phone_Number)
VALUES (3, 118, "John Doe", "john@example.com", 234556677889);

INSERT INTO employees(employee_id, sale_id, full_name, email_address, phone_Number)
VALUES (4, 117, "John zoe", "john.zoe@example.com", 23411111111);


INSERT INTO employees(employee_id, sale_id, full_name, email_address, phone_Number)
VALUES (5, 112, "John James", "john.james@example.com", 234556677882);

INSERT INTO employees(employee_id, sale_id, full_name, email_address, phone_Number)
VALUES (5, 113, "Jane Doe", "jane.doe@example.com", 234556677884);

INSERT INTO employees(employee_id, sale_id, full_name, email_address, phone_Number)
VALUES (6, 114, "Jab Doe", "jab.doe@example.com", 234556677886);

INSERT INTO employees(employee_id, sale_id, full_name, email_address, phone_Number)
VALUES (7, 115, "John Boe", "john.zoe@example.com", 23411111118);

SELECT employee_id, sale_id, full_name, email_address, phone_Number, COUNT(*) as count
FROM employees
GROUP BY employee_id, sale_id, full_name, email_address, phone_Number
HAVING COUNT(*) > 1;

/*Question  5*/
CREATE FUNCTION retrieveOddNumberOfTuple()
RETURNS TABLE
AS
RETURN (
  SELECT *
  FROM employees
  WHERE employee_id % 2 = 1
);


/*Question 6*/

SELECT FUNCTION calculateAge (@d.o.b date)
RETURNS  int
RETURN 
GETDATE() - @d.o.b ;







