package com.pablodeyvid.dsdeliverpdp.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pablodeyvid.dsdeliverpdp.dto.OrderDTO;
import com.pablodeyvid.dsdeliverpdp.entities.Order;
import com.pablodeyvid.dsdeliverpdp.repositories.OrderRepository;

@Service
public class OrderService {
	@Autowired
	private OrderRepository repository;

	@Transactional(readOnly = true) /*
									 * Garantir transação e fechamento de conexão com o banco; ReadOnly = Diz que é
									 * só pra leitura
									 */
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrderWithProducts();

		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
}
