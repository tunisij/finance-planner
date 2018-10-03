package com.tunisij.financeplanner.salary;

import org.springframework.stereotype.Service;

@Service
public class SalaryService {

    public Salary getSalary() {
        return new Salary(50000.0, 10000.0);
    }
}
