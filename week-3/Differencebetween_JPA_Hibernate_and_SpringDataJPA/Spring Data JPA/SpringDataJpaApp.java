package com.example.springdatajpa;

import com.example.springdatajpa.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringDataJpaApp {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SpringDataJpaApp.class, args);
        EmployeeService service = context.getBean(EmployeeService.class);
        service.addEmployee();
    }
}
