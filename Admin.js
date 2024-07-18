// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [residents, setResidents] = useState([]);
  const [form, setForm] = useState({
    name: '',
    gender: '',
    age: '',
    maritalStatus: '',
    job: ''
  });

  useEffect(() => {
    const storedResidents = JSON.parse(localStorage.getItem('residents')) || [];
    setResidents(storedResidents);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedResidents = [...residents, form];
    setResidents(updatedResidents);
    localStorage.setItem('residents', JSON.stringify(updatedResidents));
    setForm({ name: '', gender: '', age: '', maritalStatus: '', job: '' });
  };

  const handleDelete = (index) => {
    const updatedResidents = residents.filter((_, i) => i !== index);
    setResidents(updatedResidents);
    localStorage.setItem('residents', JSON.stringify(updatedResidents));
  };

  const handleEdit = (index) => {
    const resident = residents[index];
    setForm(resident);
    handleDelete(index);
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" required />
        <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="Age" required />
        <input type="text" name="maritalStatus" value={form.maritalStatus} onChange={handleChange} placeholder="Marital Status" required />
        <input type="text" name="job" value={form.job} onChange={handleChange} placeholder="Job" required />
        <button type="submit">Add/Update Resident</button>
      </form>
      <ul className="resident-list">
        {residents.map((resident, index) => (
          <li key={index} className="resident-item">
            {resident.name} - {resident.gender} - {resident.age} - {resident.maritalStatus} - {resident.job}
            <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
