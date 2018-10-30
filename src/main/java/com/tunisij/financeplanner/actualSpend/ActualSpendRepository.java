package com.tunisij.financeplanner.actualSpend;

import com.tunisij.financeplanner.budget.BudgetCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RepositoryRestResource
public interface ActualSpendRepository extends PagingAndSortingRepository<ActualSpend, Long> {
//    @Query(value = "select s from ActualSpend s " +
//            " join s.budgetCategory c ")
//    List<ActualSpend> findActualSpendsForAllBudgetCategories(@Param("id") Long id);
}
