package com.tunisij.financeplanner.salary;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "salary")
public class Salary {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "base_salary")
    private Double baseSalary;

    @Column(name = "annual_bonus")
    private Double bonus;

    @Column(name = "retirement_match")
    private Double retirementMatch;
}

