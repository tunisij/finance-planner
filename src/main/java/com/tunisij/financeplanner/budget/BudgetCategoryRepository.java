package com.tunisij.financeplanner.budget;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RepositoryRestResource
public interface BudgetCategoryRepository extends PagingAndSortingRepository<BudgetCategory, Long> {
    @Query(value = "select c from BudgetCategory c ")
    List<BudgetCategory> findBudgetCategories();
}
