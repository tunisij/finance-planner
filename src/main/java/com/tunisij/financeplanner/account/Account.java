package com.tunisij.financeplanner.account;


import com.tunisij.financeplanner.account.balance.Balance;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "account")
public class Account {

    @Id
    @Column(name = "account_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long accountId;

    @Column(name = "user_id")
    private String userId;

//    @Column(name = "balance_id")
//    private String balanceId;

    @OneToMany
    @JoinColumn(name = "balance_id")
    private List<Balance> balances;

    @Column(name = "account_name")
    private String accountName;

}