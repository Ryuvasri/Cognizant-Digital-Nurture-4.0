SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE savings_accounts';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE employees';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE accounts';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE savings_accounts (
    account_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    balance NUMBER
);

CREATE TABLE employees (
    emp_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    department_id NUMBER,
    salary NUMBER
);

CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    balance NUMBER
);

INSERT INTO savings_accounts VALUES (4, 104, 12000);
INSERT INTO savings_accounts VALUES (5, 105, 15000);
INSERT INTO savings_accounts VALUES (6, 106, 9000);

INSERT INTO employees VALUES (4, 'Ram', 30, 35000);
INSERT INTO employees VALUES (5, 'Raju', 30, 36000);
INSERT INTO employees VALUES (6, 'Mala', 30, 34000);

INSERT INTO accounts VALUES (1004, 104, 6000);
INSERT INTO accounts VALUES (1005, 105, 4000);
INSERT INTO accounts VALUES (1006, 106, 11000);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR acc IN (SELECT account_id, balance FROM savings_accounts) LOOP
        UPDATE savings_accounts
        SET balance = balance + (acc.balance * 0.01)
        WHERE account_id = acc.account_id;
    END LOOP;
END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_id IN NUMBER,
    bonus_percent IN NUMBER
) AS
BEGIN
    FOR emp IN (SELECT emp_id, salary FROM employees WHERE department_id = dept_id) LOOP
        UPDATE employees
        SET salary = salary + (emp.salary * bonus_percent / 100)
        WHERE emp_id = emp.emp_id;
    END LOOP;
END;
/

CREATE OR REPLACE PROCEDURE TransferFunds(
    from_acc IN NUMBER,
    to_acc IN NUMBER,
    amount IN NUMBER
) AS
    from_balance NUMBER;
BEGIN
    SELECT balance INTO from_balance FROM accounts WHERE account_id = from_acc FOR UPDATE;
    IF from_balance >= amount THEN
        UPDATE accounts SET balance = balance - amount WHERE account_id = from_acc;
        UPDATE accounts SET balance = balance + amount WHERE account_id = to_acc;
    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds');
    END IF;
END;
/
SELECT * FROM savings_accounts;
