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
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "name")
    private String name;

    @OneToMany
    @JoinColumn(name = "user_id")
    private List<Salary> salaries;

    @OneToMany
    @JoinColumn(name = "user_id")
    private List<Account> accounts;

    @Column(name = "email_address")
    private String emailAddress;

}
