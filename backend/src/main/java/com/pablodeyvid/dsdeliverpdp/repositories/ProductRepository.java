package com.pablodeyvid.dsdeliverpdp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pablodeyvid.dsdeliverpdp.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
}
