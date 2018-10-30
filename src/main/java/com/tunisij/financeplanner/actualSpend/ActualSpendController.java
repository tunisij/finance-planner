package com.tunisij.financeplanner.actualSpend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ActualSpendController {

    @Autowired ActualSpendRepository actualSpendRepository;
    @Autowired ActualSpendService actualSpendService;

    @GetMapping("/getActualSpendForEveryBudgetCategory/{actualSpendId}")
    public List<ActualSpend> getActualSpendForEveryBudgetCategory(@PathVariable Long actualSpendId) {
        return actualSpendService.getActualSpendForEveryBudgetCategory(actualSpendId);
    }
}
