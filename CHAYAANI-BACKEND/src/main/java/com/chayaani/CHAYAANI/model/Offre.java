package com.chayaani.CHAYAANI.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "offres", schema = "CHAYAANI_APP")
@Data
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long offreID;
    private String villeDepart;
    private String villeDestination;
    private int nbPersonnes;
    private float prix;

    @Temporal(value = TemporalType.TIMESTAMP)
    private Date dateDepart;

    public Date getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(Date dateDepart) {
        this.dateDepart = dateDepart;
    }

    public void setOffreID(long offreID) {
        this.offreID = offreID;
    }

    public void setVilleDepart(String villeDepart) {
        this.villeDepart = villeDepart;
    }

    public void setVilleDestination(String villeDestination) {
        this.villeDestination = villeDestination;
    }


    public void setNbPersonnes(int nbPersonnes) {
        this.nbPersonnes = nbPersonnes;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public long getOffreID() {
        return offreID;
    }

    public String getVilleDepart() {
        return villeDepart;
    }

    public String getVilleDestination() {
        return villeDestination;
    }

    public int getNbPersonnes() {
        return nbPersonnes;
    }

    public float getPrix() {
        return prix;
    }

    @Override
    public String toString() {
        return "Offre{" +
                "offreID=" + offreID +
                ", villeDepart='" + villeDepart + '\'' +
                ", villeDestination='" + villeDestination + '\'' +
                ", dateDepart=" + dateDepart +
                ", nbPersonnes=" + nbPersonnes +
                ", prix=" + prix +
                '}';
    }
}
