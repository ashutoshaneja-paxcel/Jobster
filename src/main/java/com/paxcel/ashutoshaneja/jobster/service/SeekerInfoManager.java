package com.paxcel.ashutoshaneja.jobster.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.paxcel.ashutoshaneja.jobster.model.SearchVacancy;
import com.paxcel.ashutoshaneja.jobster.model.SeekerInfo;
import com.paxcel.ashutoshaneja.jobster.model.Vacancy;

@Service
public interface SeekerInfoManager {

	public String addSeekerInfo(SeekerInfo seeker);

	public List<Vacancy> showVacancy(int userID);

	public List<Vacancy> showFilteredVacancy(SearchVacancy vacancy);

	public String applyVacancy(Vacancy applyVacancyObj);
	
	//public List<Vacancy> getPageRecord(SearchVacancy vacancyObj);
}
