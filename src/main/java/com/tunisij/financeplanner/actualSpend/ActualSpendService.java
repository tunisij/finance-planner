package com.tunisij.financeplanner.actualSpend;

import com.tunisij.financeplanner.budget.BudgetCategory;
import com.tunisij.financeplanner.budget.BudgetCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class ActualSpendService {

    @Autowired
    BudgetCategoryRepository budgetCategoryRepository;

    @Autowired
    ActualSpendRepository actualSpendRepository;

    public List<ActualSpend> getActualSpendsForEveryBudgetCategory() {
        return actualSpendRepository.findAllIds()
                .stream()
                .flatMap(id -> getActualSpendsForEveryBudgetCategory(id).stream())
                .collect(toList());
    }

    public List<ActualSpend> getActualSpendsForEveryBudgetCategory(Long actualSpendId) {

        List<BudgetCategory> budgetCategories = budgetCategoryRepository.findBudgetCategories();

        List<ActualSpend> actualSpends = budgetCategories
                .stream()
                .flatMap(e -> e.getActualSpend().stream())
                .filter(e -> e.getActualSpendId().equals(actualSpendId))
                .collect(toList());

        for (BudgetCategory budgetCategory : budgetCategories) {
            if (actualSpends.stream().map(e -> e.getBudgetCategoryId()).collect(toList()).contains(budgetCategory.getId())) {
                for (ActualSpend actualSpend: budgetCategory.getActualSpend()) {
                    actualSpend.setCategory(budgetCategory.getName());
                }
            } else {
                String name = actualSpends.size() > 0 ? actualSpends.get(0).getName() : "New Actual Spend";
                actualSpends.add(new ActualSpend(name , actualSpendId, budgetCategory.getId(), 0.0, budgetCategory.getName()));
            }
        }
        return actualSpends;
    }

    public void deleteBudgetCategories(Long budgetCategoryId) {
        actualSpendRepository.deleteActualSpendsByBudgetCategoryId(budgetCategoryId);
        budgetCategoryRepository.deleteById(budgetCategoryId);
    }
}
