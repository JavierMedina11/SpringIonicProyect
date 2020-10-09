package com.myApp.travel.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myApp.travel.entity.models.Travel;
import com.myApp.travel.entity.services.ITravelService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class TravelController {
	
	@Autowired
	ITravelService travelService;


	@GetMapping("/api/travels")
	private List<Travel> getAll(){
		return travelService.getAll();
	}
	
	@GetMapping("/api/travels/{id}")
	private Travel getOne(@PathVariable(value = "id") int id) {
		return travelService.getOne(id);
	}
	
	@PostMapping("/api/travels")
	private void addTravel(Travel bicycle) {
		travelService.addTravel(bicycle);
	}
	
	@DeleteMapping("/api/travels/{id}")
	private void deleteTravel(@PathVariable(value = "id") int id) {
		travelService.deleteTravel(id);
	}
	
	@PutMapping("/api/travels/{id}")
	private void updateTravel(@PathVariable(value = "id") int id, Travel travel) {
		travelService.updateTravel(id, travel);
	}
	
}
