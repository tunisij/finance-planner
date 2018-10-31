package com.tunisij.financeplanner.budget;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RepositoryRestResource
public interface BudgetCategoryRepository extends PagingAndSortingRepository<BudgetCategory, Long> {
//    @Query(value = "select c from BudgetCategory c " +
//            " left join c.actualSpend s on s.actualSpendId = :id " +
//            " where s.actualSpendId = :id " +
//            " or s.actualSpendId is null ")
//    List<BudgetCategory> findActualSpendsForAllBudgetCategories(@Param("id") Long actualSpendId);

    @Query(value = "select c from BudgetCategory c ")
    List<BudgetCategory> findBudgetCategories();
}
