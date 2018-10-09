package com.tunisij.financeplanner.account.balance;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class BalanceId implements Serializable {

    @Column(name = "balance_id")
    private Long balanceId;

    @Column(name = "date")
    private LocalDate date;
}
