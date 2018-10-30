package com.tunisij.financeplanner.budget;

import com.tunisij.financeplanner.actualSpend.ActualSpend;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "budget_category")
public class BudgetCategory implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "amount")
    private Double amount;

    @OneToMany(mappedBy = "budgetCategoryId", fetch = FetchType.LAZY)
    private List<ActualSpend> actualSpend;

}