package com.sta.api.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sta.api.entitys.Student;
import com.sta.api.repositorys.StudentRepository;
import com.sta.api.services.StudentService;

@RestController
@RequestMapping("/std")
@CrossOrigin("*")
public class StudentController {
	@Autowired
	StudentService studentService;
	
	@PostMapping("/saveStudentDetails")
	private ResponseEntity<?> saveStudentDetails(@RequestBody Student student){
		return studentService.saveStudentData(student);
	}
	
	@GetMapping("/getStudents")
	private ResponseEntity<?> getStudens(@RequestParam("pageNumber") int pageNumber, @RequestParam(name="limit",required = false,defaultValue = "9") int limit){
		return studentService.getStudents(pageNumber, limit);
	}
	
	@GetMapping("/getRank")
	private ResponseEntity<?> getRank(@RequestParam("name") String name) {
		return studentService.getRank(name);
	}
	
	@PostMapping("/updateSatScore")
	private ResponseEntity<?> updateSATScrore(@RequestBody Map<String,Object> map){
		return studentService.updatesatScoreByName(map);
	}
	
	@GetMapping("/removeStudent")
	private ResponseEntity<?> removeStudent(@RequestParam("name") String name) {
		return studentService.removeByName(name);
	}
}
