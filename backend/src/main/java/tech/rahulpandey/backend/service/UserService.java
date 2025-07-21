package tech.rahulpandey.backend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tech.rahulpandey.backend.model.MailList;
import tech.rahulpandey.backend.model.Users;
import tech.rahulpandey.backend.repository.MailListRepository;
import tech.rahulpandey.backend.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final AuthenticationManager authManager;

    private final JwtService jwtService;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    private final MailListRepository mailListRepository;

    public UserService(UserRepository userRepository, AuthenticationManager authManager, JwtService jwtService, MailListRepository mailListRepository) {
        this.userRepository = userRepository;
        this.authManager = authManager;
        this.jwtService = jwtService;
        this.mailListRepository = mailListRepository;
    }

    public Users register(Users user){
        MailList mailList = mailListRepository.findByEmail(user.getEmail());
        if(mailList == null) return null;
        String role = mailList.getRole();
        user.setRoles(List.of(role));
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String verify(Users user) {
        Authentication authentication =
                authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if(authentication.isAuthenticated()) return jwtService.generateToken(user.getUsername());

        return "failure";
    }
}
