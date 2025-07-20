package tech.rahulpandey.backend.controller;

import org.springframework.web.bind.annotation.*;
import tech.rahulpandey.backend.service.RestClientService;
import tech.rahulpandey.backend.util.JsonUtil;

import java.io.IOException;

@RestController
@RequestMapping("/api/event")
public class EventDataController {

    private final RestClientService restClientService;
    private final JsonUtil jsonUtil;

    public EventDataController(RestClientService restClientService, JsonUtil jsonUtil) {
        this.restClientService = restClientService;
        this.jsonUtil = jsonUtil;
    }

    @PutMapping("/{path}")
    void updateFileContent(@PathVariable String path, @RequestBody String body) {
        try{
            String sha = restClientService.getFileSha(path);
            String githubReqBody = jsonUtil.buildRequestBody(sha,body);
            restClientService.updateFileContent(path, githubReqBody);
            // also store in a database
        }catch (IOException ie){
            System.err.println("Error while update contents of file: " + path + ". Error: " +ie.getMessage());
        }
    }

    // add a get mapping method to fetch event data from a database
}
