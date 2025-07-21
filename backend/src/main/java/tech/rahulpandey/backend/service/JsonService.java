package tech.rahulpandey.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class JsonService {

    private final ObjectMapper objectMapper;

    public JsonService(ObjectMapper objectMapper){
        this.objectMapper = objectMapper;
    }

    public String extractShaFromResponse(String res) throws JsonProcessingException {
        JsonNode jsonNode = objectMapper.readTree(res);
        return jsonNode.get("sha").asText();
    }

    public String buildRequestBody(String sha,String body) throws JsonProcessingException {
        JsonNode jsonNode = objectMapper.readTree(body);
        String content = jsonNode.get("content").asText();
        String message = jsonNode.get("message").asText();

        Map<String,String> data = new HashMap<>();
        data.put("sha",sha);
        data.put("content",content);
        data.put("message",message);

        return objectMapper.writeValueAsString(data);
    }

}
