package com.tunisij.financeplanner.user;

import com.tunisij.financeplanner.account.Account;
import com.tunisij.financeplanner.salary.Salary;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "username")
    private String userName;

    @Column(name = "name")
    private String name;

    @OneToOne
    @JoinColumn(name = "salary_id")
    private Salary salaries;

    @OneToMany
    @JoinColumn(name = "account_id")
    private List<Account> accounts;


}
