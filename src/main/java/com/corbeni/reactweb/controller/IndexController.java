package com.corbeni.reactweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String index(Model model) {
    	model.addAttribute("cssPath", Helpers.cssPath);    	
    	model.addAttribute("jsPath", Helpers.jsPath);
    	model.addAttribute("title", "My next holiday");
        model.addAttribute("subtitle", "Here I would like travel soon. As soon as possible");
        return "index";
    }

}
