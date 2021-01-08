package com.pablodeyvid.dsdeliverpdp.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pablodeyvid.dsdeliverpdp.dto.ProductDTO;
import com.pablodeyvid.dsdeliverpdp.entities.Product;
import com.pablodeyvid.dsdeliverpdp.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true) /*
									 * Garantir transação e fechamento de conexão com o banco; ReadOnly = Diz que é
									 * só pra leitura
									 */
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();

		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
}
