package com.scalableservices.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scalableservices.datamodel.Customer;
import com.scalableservices.dto.CustomerDTO;
import com.scalableservices.repository.CustomerRepository;

@Transactional
@Service
public class CustomerService {
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private CustomerRepository customerRepository;

	public List<CustomerDTO> all() {
		return customerRepository.findAll().stream().map(c -> modelMapper.map(c, CustomerDTO.class))
				.collect(Collectors.toList());
	}

	public CustomerDTO save(CustomerDTO customerDTO) {
		Customer customer = customerRepository.save(modelMapper.map(customerDTO, Customer.class));
		CustomerDTO result = modelMapper.map(customer, CustomerDTO.class);
		return result;
	}

	public CustomerDTO get(long customerId) {
		Optional<Customer> customerResult = customerRepository.findById(customerId);
		if(!customerResult.isPresent()){
			return null;
		}
		return modelMapper.map(customerResult.get(), CustomerDTO.class);
	}

	public void delete(long customerId) {
		customerRepository.deleteById(customerId);
	}
}
