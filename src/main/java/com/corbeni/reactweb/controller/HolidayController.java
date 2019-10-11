package com.corbeni.reactweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
public class HolidayController {

    @GetMapping("/holiday/{id}")
    public String index(@PathVariable("id") Integer id, Model model) {
    	model.addAttribute("cssPath", Helpers.cssPath);
    	model.addAttribute("jsPath", Helpers.jsPath);
    	model.addAttribute("id", id);
    	model.addAttribute("title", "Pagina");
        model.addAttribute("subtitle", "Testing page ");
        return "holiday";
    }

}
