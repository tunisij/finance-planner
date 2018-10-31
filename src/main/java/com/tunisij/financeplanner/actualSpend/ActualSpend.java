package com.tunisij.financeplanner.actualSpend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "actual_spend")
public class ActualSpend implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column(name = "actual_spend_id")
    private Long actualSpendId;

    @Column(name = "budget_category_id")
    private Long budgetCategoryId;

    @Column(name = "amount")
    private Double amount;

    @Transient
    private String category;

    public ActualSpend(String name, Long actualSpendId, Long budgetCategoryId, Double amount, String category) {
        this.name = name;
        this.actualSpendId = actualSpendId;
        this.budgetCategoryId = budgetCategoryId;
        this.amount = amount;
        this.category = category;
    }
}