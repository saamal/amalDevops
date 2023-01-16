package com.chayaani.CHAYAANI.controller;

import com.chayaani.CHAYAANI.model.User;
import com.chayaani.CHAYAANI.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class UserController {
    UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){this.userRepository=userRepository ;}

    @GetMapping("/users")
    public String getUsers() {
        List<User> users = userRepository.findAll();
        return users.toString();
    }

    @CrossOrigin()
    @GetMapping("/user/")
    public User getUserByUserName(@RequestParam String userName){
        return userRepository.findByUsername(userName);
    }

    @CrossOrigin()
    @PostMapping("/user")
    public User addUser (@RequestBody User user){
        user.setUsername(user.getUsername());
        user.setFirstname(user.getFirstname());
        user.setLastname(user.getLastname());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setCin(user.getCin());
        User newUser = userRepository.save(user);
        return (newUser);
    }
    @PutMapping("/user")
    public User updateUser (@RequestParam String username,@RequestBody User user) {
        User userData = userRepository.findByUsername(username);
            if (user.getUsername()!=null){userData.setUsername(user.getUsername());};
            if(user.getFirstname()!=null){userData.setFirstname(user.getFirstname());};
            if(user.getLastname()!=null){userData.setLastname(user.getLastname());};
            if(user.getEmail()!=null){userData.setEmail(user.getEmail());}
            if(user.getPassword()!=null){userData.setPassword(user.getPassword());}
            if(user.getCin()!=null){userData.setCin(user.getCin());}
            User newUser = userRepository.save(userData);
            return (newUser);
    }

    @DeleteMapping("/user")
    public User deleteUser (@RequestParam String username) {
        User user = userRepository.findByUsername(username);
        userRepository.deleteById((int) user.getUserID());
        return user;
    }

    @DeleteMapping("/users")
    public String deleteUsers () {
        List<User> users = userRepository.findAll();
        userRepository.deleteAll();
        return users.toString();
    }

    private String hash_password(String password)  {
        String passwordhash = "abc123"+password+"ijk456";
        return  passwordhash;
    }
    private String password(String passwordhash){
        String pass = passwordhash.replace("abc123","");
        String password = pass.replace("ijk456","");
        return password;
    }
}
