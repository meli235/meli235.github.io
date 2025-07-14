package com.test1.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {
    @GetMapping("/home")
    public String index() {
        return "index"; 
    }
    @GetMapping("/login")
    public String dashboarard(){
        return "dashboard"; 
    }
}
