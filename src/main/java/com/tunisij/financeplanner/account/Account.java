package com.tunisij.financeplanner.account;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "account")
public class Account {

    @Id
    @Column(name = "account_id")
    private Long accountId;

    @Column(name = "balance_id")
    private Long balanceId;

    @Column(name = "account_name")
    private String accountName;

}