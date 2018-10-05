package com.tunisij.financeplanner.salary;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SalaryRepository extends PagingAndSortingRepository<Salary, Long> {
}
