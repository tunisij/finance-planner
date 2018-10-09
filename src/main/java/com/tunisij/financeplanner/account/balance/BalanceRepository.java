package com.tunisij.financeplanner.account.balance;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BalanceRepository extends PagingAndSortingRepository<Balance, BalanceId> {
}
