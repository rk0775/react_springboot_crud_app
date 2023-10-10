package com.sta.api.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sta.api.entitys.Student;

public interface StudentRepository extends JpaRepository<Student, String> {

	Student findByName(String name);
}
