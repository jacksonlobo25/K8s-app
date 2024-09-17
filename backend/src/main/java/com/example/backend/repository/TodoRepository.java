package com.example.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend.model.Todo;

public interface TodoRepository extends MongoRepository<Todo, String>{ 
	
}