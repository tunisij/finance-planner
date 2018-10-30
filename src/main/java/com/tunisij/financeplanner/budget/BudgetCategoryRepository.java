package com.tunisij.financeplanner.budget;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BudgetCategoryRepository extends PagingAndSortingRepository<BudgetCategory, Long> {
}
