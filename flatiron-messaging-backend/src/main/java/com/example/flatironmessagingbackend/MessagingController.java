package com.example.flatironmessagingbackend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessagingController {
    @Autowired
    private MessageService messageService; 
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/get-user-messages")
    public List<Message> getUserMessages() {
        return messageService.getUserMessages(); 
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/get-sender-messages")
    public List<Message> getSenderMessages() {
        return messageService.getSenderMessages(); 
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/api/delete-message")
    public List<Message> deleteMessage(Message message) {
        return messageService.deleteUserMessage(message); 
    }
}