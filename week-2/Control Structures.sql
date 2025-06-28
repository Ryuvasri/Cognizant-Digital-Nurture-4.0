SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE loans';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE customers';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE customers (
    customer_id   NUMBER PRIMARY KEY,
    name          VARCHAR2(100),
    age           NUMBER,
    balance       NUMBER,
    is_vip        CHAR(1) DEFAULT 'N'
);

CREATE TABLE loans (
    loan_id        NUMBER PRIMARY KEY,
    customer_id    NUMBER REFERENCES customers(customer_id),
    interest_rate  NUMBER(5,2),
    due_date       DATE
);

INSERT INTO customers VALUES (1, 'Alice', 65, 12000, 'N');
INSERT INTO customers VALUES (2, 'ram', 45, 8000, 'N');
INSERT INTO customers VALUES (3, 'seetha', 70, 5000, 'N');

INSERT INTO loans VALUES (101, 1, 7.5, SYSDATE + 15);
INSERT INTO loans VALUES (102, 2, 8.0, SYSDATE + 40);
INSERT INTO loans VALUES (103, 3, 6.5, SYSDATE + 10);

COMMIT;

BEGIN
    FOR loan_rec IN (
        SELECT l.loan_id, l.interest_rate, c.age
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
    ) LOOP
        IF loan_rec.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - 1
            WHERE loan_id = loan_rec.loan_id;

            DBMS_OUTPUT.PUT_LINE('Interest rate updated for loan ID ' || loan_rec.loan_id);
        END IF;
    END LOOP;
    COMMIT;
END;
/

BEGIN
    FOR cust IN (SELECT customer_id, balance FROM customers) LOOP
        IF cust.balance > 10000 THEN
            UPDATE customers
            SET is_vip = 'Y'
            WHERE customer_id = cust.customer_id;

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust.customer_id || ' promoted to VIP');
        END IF;
    END LOOP;
    COMMIT;
END;
/

BEGIN
    FOR loan_rec IN (
        SELECT l.loan_id, c.name, l.due_date
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date <= SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.loan_id ||
                             ' for customer ' || loan_rec.name ||
                             ' is due on ' || TO_CHAR(loan_rec.due_date, 'DD-Mon-YYYY'));
    END LOOP;
END;
/
