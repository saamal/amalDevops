package com.chayaani.CHAYAANI.repository;

import com.chayaani.CHAYAANI.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUsername(String username);
    List<User> findAll();
}
