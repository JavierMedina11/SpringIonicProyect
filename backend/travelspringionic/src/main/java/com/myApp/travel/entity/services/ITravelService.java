package com.myApp.travel.entity.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.myApp.travel.entity.models.Travel;

public interface ITravelService {
	
	public List<Travel> getAll();

	public void addTravel(Travel travel);

	public void deleteTravel(int id);

	void updateTravel(int id, Travel travel);

	public Travel getOne(int id);
	
}
