
/*Question 1*/
CREATE DATABASE TJ_Dojo;
use TJ_Dojo;


CREATE TABLE employees(employee_id int PRIMARY KEY , sale_id int FOREIGN KEY,  full_Name varchar(99, email_Address varchar(99), phoneNumber varchar(20), d.o.b date  );
CREATE TABLE sales( sale_id int PRIMARY KEY, sale_name varchar(99), sale_date date );


/*Question 2*/
SELECT *
FROM Customers
GROUP BY Country 
ORDER BY Country DESC;


/*Question 3*/
CREATE PROCEDURE updateEmployee @employee_id int, @sale_id int, @full_Name varchar(99), @email_Adderss varchar(99), @phone_Number varchar(99)
AS 
BEGIN
	WHERE employee_id = @employee_id
	INSERT  employees (sale_id, full_name, email_address, phone_Number) 
	VALUES (@sale_id, @full_Name, @email_Adderss, @phone_Number )
END;

EXEC updateEmployee  @employee_id = 1, @full_Name = "New Name", @email_Adderss="new.address@example.com", @phone_Number = 255711223344;

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


SELECT  full_name, email_address, phone_Number count(*)
FROM employees 
GROUP BY full_name, email_address, phone_Number
HAVING count(*) > 1 ;



/*Question 5*/	
SELECT FUNCTION retrieveOddNumberOfTuple() 
RETURNS TABLE
RETURN 
 IF (employee_id % 2) != 0  THEN
 	SELECT *
 	FROM employees 
 END IF
 




/*Question 6*/

SELECT FUNCTION calculateAge (@d.o.b date)
RETURNS  int
RETURN 
GETDATE() - @d.o.b ;





