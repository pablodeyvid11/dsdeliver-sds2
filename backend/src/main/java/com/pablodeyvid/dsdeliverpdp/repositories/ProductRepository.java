package com.pablodeyvid.dsdeliverpdp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pablodeyvid.dsdeliverpdp.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	List<Product> findAllByOrderByNameAsc();
}
