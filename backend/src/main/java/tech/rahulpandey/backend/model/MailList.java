package tech.rahulpandey.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class MailList {
    @Id
    private String email;

    private String role;

    public String getRole() {
        return role;
    }
}
