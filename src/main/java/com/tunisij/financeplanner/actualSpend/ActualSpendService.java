package com.tunisij.financeplanner.actualSpend;

import com.tunisij.financeplanner.budget.BudgetCategory;
import com.tunisij.financeplanner.budget.BudgetCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static java.time.LocalDate.now;
import static java.util.stream.Collectors.toList;

@Service
public class ActualSpendService {

    @Autowired
    BudgetCategoryRepository budgetCategoryRepository;

    public List<ActualSpend> getActualSpendForEveryBudgetCategory(Long actualSpendId) {

        List<BudgetCategory> budgetCategories = budgetCategoryRepository.findBudgetCategories();

        List<ActualSpend> actualSpends = budgetCategories
                .stream()
                .flatMap(e -> e.getActualSpend().stream())
                .filter(e -> e.getActualSpendId().equals(actualSpendId))
                .collect(toList());

        for (BudgetCategory budgetCategory : budgetCategories) {
            if (!actualSpends.stream().map(e -> e.getBudgetCategoryId()).collect(toList()).contains(budgetCategory.getId())) {
                String name = actualSpends.size() > 0 ? actualSpends.get(0).getName() : "New Actual Spend";
                actualSpends.add(new ActualSpend(1L, name , actualSpendId, budgetCategory.getId(), 0.0));
            }
        }
        return actualSpends;
    }
}
