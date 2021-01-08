package com.pablodeyvid.dsdeliverpdp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pablodeyvid.dsdeliverpdp.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
