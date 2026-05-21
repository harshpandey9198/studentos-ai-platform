package com.studentos.backend.service;

import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    public String askGemini(String question) {

        String q = question.toLowerCase();

        if (q.contains("react")) {
            return "AI Response: React is a JavaScript library used to build fast and interactive user interfaces.";
        }

        if (q.contains("java")) {
            return "AI Response: Java is a programming language used for backend development and apps.";
        }

        if (q.contains("spring boot")) {
            return "AI Response: Spring Boot is a Java framework used to build backend APIs.";
        }

        return "AI Response: " + question;
    }
}