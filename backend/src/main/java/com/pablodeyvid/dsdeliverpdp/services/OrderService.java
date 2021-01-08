package com.pablodeyvid.dsdeliverpdp.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pablodeyvid.dsdeliverpdp.dto.OrderDTO;
import com.pablodeyvid.dsdeliverpdp.dto.ProductDTO;
import com.pablodeyvid.dsdeliverpdp.entities.Order;
import com.pablodeyvid.dsdeliverpdp.entities.Product;
import com.pablodeyvid.dsdeliverpdp.entities.enums.OrderStatus;
import com.pablodeyvid.dsdeliverpdp.repositories.OrderRepository;
import com.pablodeyvid.dsdeliverpdp.repositories.ProductRepository;

@Service
public class OrderService {
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true) /*
									 * Garantir transação e fechamento de conexão com o banco; ReadOnly = Diz que é
									 * só pra leitura
									 */
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrderWithProducts();

		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLatitude(), Instant.now(),
				OrderStatus.PENDING);
		
		for(ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		
		order = repository.save(order);
		return new OrderDTO(order);
	}
}
