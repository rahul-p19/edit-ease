package tech.rahulpandey.backend.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tech.rahulpandey.backend.service.RestClientService;
import tech.rahulpandey.backend.util.JsonUtil;

import java.io.IOException;

@RestController("/api/update")
public class GithubController {

    private final RestClientService restClientService;
    private final JsonUtil jsonUtil;

    public GithubController(RestClientService restClientService, JsonUtil jsonUtil) {
        this.restClientService = restClientService;
        this.jsonUtil = jsonUtil;
    }

    @PostMapping("/{path}")
    void updateFileContent(@PathVariable String path, @RequestBody String body) {
        try{
            String sha = restClientService.getFileSha(path);
            String githubReqBody = jsonUtil.buildRequestBody(sha,body);
            restClientService.updateFileContent(path, githubReqBody);

        }catch (IOException ie){
            System.err.println("Error while update contents of file: " + path + ". Error: " +ie.getMessage());
        }
    }
}
