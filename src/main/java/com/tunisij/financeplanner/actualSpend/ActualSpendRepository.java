package com.tunisij.financeplanner.actualSpend;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@RepositoryRestResource
public interface ActualSpendRepository extends PagingAndSortingRepository<ActualSpend, Long> {
    @Query(value = "select distinct(s.actualSpendId) from ActualSpend s ")
    List<Long> findAllIds();

    @Modifying
    @Transactional
    @Query(value = "delete from ActualSpend where budgetCategoryId = :budgetCategoryId ")
    void deleteActualSpendsByBudgetCategoryId(@Param("budgetCategoryId") Long budgetCategoryId);
}
