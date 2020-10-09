package com.myApp.travel.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myApp.travel.entity.dao.ITravelDao;
import com.myApp.travel.entity.models.Travel;
import com.myApp.travel.entity.services.ITravelService;

@Service
public class TravelServiceImpl implements ITravelService{
	
	@Autowired
	ITravelDao travelDao;
	
	@Override
	public List<Travel> getAll() { 
		return (List<Travel>) travelDao.findAll();
	}

	@Override
	public void addTravel(Travel travel) {
		travelDao.save(travel);
	}

	@Override
	public void deleteTravel(int id) {
		travelDao.deleteById(id);
	}
	
	@Override
	public void updateTravel(int id, Travel travel) {
		Optional<Travel> b = travelDao.findById(id);
		if(b.isPresent()) {
			travel.setId(id);
			travelDao.save(travel);
		}
	}

	@Override
	public Travel getOne(int id) {
		return travelDao.findById(id).get();
	}
	
}
