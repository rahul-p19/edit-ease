package tech.rahulpandey.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private List<String> rules;

    private List<String> format;

    private EventCategory category;

    private List<String> prizes;

    @JsonFormat(pattern = "dd-mm-yyyy")
    private Date registrationDeadline;

    private Integer minTeamSize;

    private Integer maxTeamSize;

    private List<String> eventDates;

    @ElementCollection
    private List<Organiser> organisers;

    @OneToOne
    private Users user;

}
