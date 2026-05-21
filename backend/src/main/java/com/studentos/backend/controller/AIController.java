package com.studentos.backend.controller;

import com.studentos.backend.service.GeminiService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175"
})
public class AIController {

    private final GeminiService geminiService;

    public AIController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }


    @PostMapping("/chat")
    public String chat(@RequestBody Map<String, String> body) {
        String question = body.get("question");
        return geminiService.askGemini(question);
    }
}