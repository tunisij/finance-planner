package com.tunisij.financeplanner.budget;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BudgetCategoryController {

    @Autowired
    BudgetCategoryRepository budgetCategoryRepository;

//    @GetMapping("/getActualSpend/{id}")
//    public List<BudgetCategory> findActualSpendsForAllBudgetCategories(@PathVariable Long id) {
//        return budgetCategoryRepository.findActualSpendsForAllBudgetCategories(id);
//    }
}
