package com.resident.resident.controller;


import com.resident.resident.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import com.resident.resident.services.AdminServices;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminServices adminServices;

    @PostMapping("/login")
    public boolean loginAdmin( Admin admin) {
        return adminServices.validateAdmin(admin.getEmail(), admin.getPassword());
    }

    @PostMapping("/add")
    public String saveAdmin( Admin admin) {
        adminServices.saveAdmin(admin);
        return "admin added";
    }
}
