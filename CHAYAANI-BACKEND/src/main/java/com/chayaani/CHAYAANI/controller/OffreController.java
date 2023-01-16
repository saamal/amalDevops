package com.chayaani.CHAYAANI.controller;

import com.chayaani.CHAYAANI.model.Offre;
import com.chayaani.CHAYAANI.repository.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class OffreController {
    OffreRepository offreRepository;
    @Autowired
    public OffreController(OffreRepository offreRepository){this.offreRepository=offreRepository ;}

    @GetMapping("/offres")
    public String getOffres() {
        List<Offre> offres = offreRepository.findAll();
        return offres.toString();
    }

    @GetMapping("/offre")
    public String getOffreByOffre(@RequestParam String villeDepart,@RequestParam String villeDestination ){
        List<Offre> offre = offreRepository.findByVilleDepartAndVilleDestination(villeDepart,villeDestination);
        return offre.toString();
    }
    @CrossOrigin()
    @PostMapping("/offre")
    public Offre addOffre (@RequestBody Offre offre){
        offre.setVilleDepart(offre.getVilleDepart());
        offre.setVilleDestination(offre.getVilleDestination());
        offre.setDateDepart(offre.getDateDepart());
        offre.setNbPersonnes(offre.getNbPersonnes());
        offre.setPrix(offre.getPrix());
        offre.setDateDepart(offre.getDateDepart());
        Offre newOffre = offreRepository.save(offre);
        return (newOffre);
    }
}

