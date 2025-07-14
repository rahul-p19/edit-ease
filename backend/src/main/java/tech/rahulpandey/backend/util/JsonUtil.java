package tech.rahulpandey.backend.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class JsonUtil {

    private final ObjectMapper objectMapper;

    public JsonUtil(ObjectMapper objectMapper){
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
