package com.pablodeyvid.dsdeliverpdp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pablodeyvid.dsdeliverpdp.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC") // Não é SQL é JPQL
	List<Order> findOrderWithProducts();
}
