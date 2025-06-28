package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // Arrange - Setup method
    @Before
    public void setUp() {
        calculator = new Calculator();  // runs before each test
        System.out.println("Setup complete.");
    }

    // Teardown method
    @After
    public void tearDown() {
        calculator = null;  // clean up
        System.out.println("Teardown complete.");
    }

    @Test
    public void testAddition() {
        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = calculator.subtract(10, 4);

        // Assert
        assertEquals(6, result);
    }
}
