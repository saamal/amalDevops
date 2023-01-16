package com.chayaani.CHAYAANI.repository;

import com.chayaani.CHAYAANI.model.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OffreRepository extends JpaRepository<Offre,Integer> {
    List<Offre> findByVilleDepartAndVilleDestination(String villeDepart,String villeDestination );
    List<Offre> findAll();
}