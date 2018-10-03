package com.tunisij.financeplanner.salary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SalaryController {

    @Autowired private SalaryService salaryService;

    @GetMapping("/salary")
    public Salary getSalary() {
        return salaryService.getSalary();
    }
}
