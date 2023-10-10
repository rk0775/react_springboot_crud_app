package com.sta.api.services;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.sta.api.CustomExceptions.StudentNotFoundException;
import com.sta.api.commenServices.ManageException;
import com.sta.api.entitys.Student;
import com.sta.api.repositorys.StudentRepository;

@Service
public class StudentService {
	@Autowired
	StudentRepository studentRepository;
	@Autowired
	ManageException manageException;
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	
	public ResponseEntity<?> saveStudentData(Student student) {
		try {
			student.setPassed((student.getSatScore()>30) ? "Pass" : "Fail");
			studentRepository.save(student);
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(Map.of("status",0,"message","student information save successfully."));
		}catch(Exception e) {
			return manageException.getExceptionAsResponse(e);
		}
	}
	
	
	public ResponseEntity<?> getStudents(int page,int limit){
		try {
			Pageable pageable = PageRequest.of(page, limit);
			Page<Student> students = studentRepository.findAll(pageable);
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(Map.of("status",0,"students",students,"totalRecords",students.getTotalElements(),"totalPages",students.getTotalPages()));
		}catch(Exception e) {
			return manageException.getExceptionAsResponse(e);
		}
	}
	
	
	public ResponseEntity<?> getRank(String name){
		try {
			String query = "SELECT (SELECT COUNT(*) FROM students t2 WHERE t2.student_sat_score > t1.student_sat_score) +1 AS rnk FROM students t1 where t1.student_name='"+name+"'";
			int rank =jdbcTemplate.queryForObject(query, Integer.class);
			return ResponseEntity.status(HttpStatus.OK).body(Map.of("status",0,"rank",rank));
		}catch (Exception e) {
			return manageException.getExceptionAsResponse(e);
		}
	}


	public ResponseEntity<?> updatesatScoreByName(Map<String, Object> map) {
		try {
			Student std = studentRepository.findByName(map.get("name")+"");
			if(std!=null) {
				float score=Float.parseFloat(map.get("satScore")+"");
				std.setSatScore(score);
				std.setPassed(score > 30 ? "Pass" : "Fail");
				studentRepository.save(std);
				return ResponseEntity.status(HttpStatus.OK).body(Map.of("status",0,"message","SAT score updated successfully."));
			}else
				throw new StudentNotFoundException("student not found by name "+map.get("name"));    
		}catch(Exception e) {
			return manageException.getExceptionAsResponse(e);
		}
	}
	
	
	public ResponseEntity<?> removeByName(String name) {
		try {
			Student std = studentRepository.findByName(name);
			if(std!=null) {
				studentRepository.delete(std);
				return ResponseEntity.status(HttpStatus.OK).body(Map.of("status",0,"message","record successfully removed."));
			}else
				throw new StudentNotFoundException("student not found by name "+name);    
		}catch(Exception e) {
			return manageException.getExceptionAsResponse(e);
		}
	}

}
