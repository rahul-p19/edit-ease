package tech.rahulpandey.backend.controller;

import org.springframework.web.bind.annotation.*;
import tech.rahulpandey.backend.service.RestClientService;
import tech.rahulpandey.backend.service.JsonService;

import java.io.IOException;

@RestController
@RequestMapping("/api/event")
public class EventDataController {

    private final RestClientService restClientService;
    private final JsonService jsonService;

    public EventDataController(RestClientService restClientService, JsonService jsonService) {
        this.restClientService = restClientService;
        this.jsonService = jsonService;
    }

    @PutMapping("/{path}")
    void updateFileContent(@PathVariable String path, @RequestBody String body) {
        try{
            String sha = restClientService.getFileSha(path);
            String githubReqBody = jsonService.buildRequestBody(sha,body);
            restClientService.updateFileContent(path, githubReqBody);
            // also store in a database
        }catch (IOException ie){
            System.err.println("Error while update contents of file: " + path + ". Error: " +ie.getMessage());
        }
    }

    // add a get mapping method to fetch event data from a database
}
