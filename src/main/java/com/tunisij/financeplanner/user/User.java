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
    @Column(name = "username")
    private String userName;

    @Column(name = "name")
    private String name;

    @OneToMany
    @JoinColumn(name = "username")
    private List<Salary> salaries;

    @OneToMany
    @JoinColumn(name = "username")
    private List<Account> accounts;


}
