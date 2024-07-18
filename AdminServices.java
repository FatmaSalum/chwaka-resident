package com.resident.resident.services;

import com.resident.resident.model.Admin;

public interface AdminServices {
    public Admin saveAdmin(Admin admin);
    public boolean validateAdmin(String email, String password);
}
