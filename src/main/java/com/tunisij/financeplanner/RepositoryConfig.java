package com.tunisij.financeplanner;

import com.tunisij.financeplanner.account.Account;
import com.tunisij.financeplanner.actualSpend.ActualSpend;
import com.tunisij.financeplanner.asset.Asset;
import com.tunisij.financeplanner.budget.BudgetCategory;
import com.tunisij.financeplanner.salary.Salary;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Account.class);
        config.exposeIdsFor(Asset.class);
        config.exposeIdsFor(Salary.class);
        config.exposeIdsFor(BudgetCategory.class);
        config.exposeIdsFor(ActualSpend.class);
    }
}
