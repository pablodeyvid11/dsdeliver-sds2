package com.pablodeyvid.dsdeliverpdp.entities.enums;

public enum OrderStatus {
	PENDING(0), DELIVERED(1);

	private OrderStatus(int id) {
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	private Integer id;
}
