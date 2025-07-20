package tech.rahulpandey.backend.service;

import org.springframework.stereotype.Service;
import tech.rahulpandey.backend.model.Users;

@Service
public class JwtService {

    public String generateToken(Users user){
        return "token"+user.getUsername();
    }

}
