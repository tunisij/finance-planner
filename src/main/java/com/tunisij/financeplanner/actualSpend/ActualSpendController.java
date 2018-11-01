package com.tunisij.financeplanner.actualSpend;

import com.tunisij.financeplanner.budget.BudgetCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ActualSpendController {

    @Autowired ActualSpendService actualSpendService;

    @GetMapping("/getActualSpendsForEveryBudgetCategory")
    public List<ActualSpend> getActualSpendsForEveryBudgetCategory() {
        return actualSpendService.getActualSpendsForEveryBudgetCategory();
    }

    @GetMapping("/getActualSpendsForEveryBudgetCategory/{actualSpendId}")
    public List<ActualSpend> getActualSpendsForEveryBudgetCategory(@PathVariable Long actualSpendId) {
        return actualSpendService.getActualSpendsForEveryBudgetCategory(actualSpendId);
    }

    @DeleteMapping("/deleteBudgetCategories/{budgetCategoryId}")
    public void deleteBudgetCategories(@PathVariable Long budgetCategoryId) {
        actualSpendService.deleteBudgetCategories(budgetCategoryId);
    }
}
