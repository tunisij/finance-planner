package com.tunisij.financeplanner.account.balance;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "balance")
public class Balance {

//    @Id
//    @Column(name = "balance_id")
//    private Long balanceId;
//
//    @Column(name = "date")
//    private LocalDate date;

    @EmbeddedId
    private BalanceId balanceId;

    @Column(name = "balance")
    private Double balance;

}