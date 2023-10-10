package com.sta.api.commenServices;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sta.api.services.StudentService;

@Service
public class ManageException {
	Logger logger=LoggerFactory.getLogger(ManageException.class);	
	public ResponseEntity<?> getExceptionAsResponse(Exception e){
		logger.error("ERROR : "+e.getMessage());
		e.printStackTrace();
		return ResponseEntity
				.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(Map.of("status",-1,"message",e.getMessage()));
	}
}
