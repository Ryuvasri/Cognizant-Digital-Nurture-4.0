package com.example.springdatajpa.service;

import com.example.springdatajpa.model.Employee;
import com.example.springdatajpa.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee() {
        Employee emp = new Employee();
        emp.setName("Alice");
        emp.setSalary(60000.0);
        employeeRepository.save(emp);
    }
}
