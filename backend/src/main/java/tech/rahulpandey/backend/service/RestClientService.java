package tech.rahulpandey.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import tech.rahulpandey.backend.util.JsonUtil;

import java.io.IOException;

@Service
public class RestClientService {

    @Value("${github.username}")
    private String owner;

    @Value("${github.repo}")
    private String repo;

    private final RestClient restClient;

    private final JsonUtil jsonUtil;

    public RestClientService(RestClient.Builder restClientBuilder,  JsonUtil jsonUtil) {
        String url = String.format("https://api.github.com/repos/%s/%s/contents/", owner, repo);
        restClient = restClientBuilder.baseUrl(url).build();
        this.jsonUtil = jsonUtil;
    }

    // method to get SHA for required file
    public String getFileSha(String path) throws IOException {
        String res =  restClient.get()
                .uri(path)
                .retrieve()
                .body(String.class);
        return jsonUtil.extractShaFromResponse(res);
    }

    // method to update contents of required file
    public void updateFileContent(String path, String requestBody){
        restClient.put()
                .uri(path)
                .contentType(MediaType.APPLICATION_JSON)
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }
}
