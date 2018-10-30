package com.tunisij.financeplanner.actualSpend;

import com.tunisij.financeplanner.budget.BudgetCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

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

    @Column(name = "budget_category_id", insertable = false, updatable = false)
    private Long budgetCategoryId;

    @Column(name = "amount")
    private Double amount;
}