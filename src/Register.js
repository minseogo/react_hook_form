// src/Signup.js
import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  }); // 이 데이터를 상황에 맞게 변경해서 사용

  const handleChange = (e) => { // 모든 input, select
    const { name, value } = e.target;
    setFormData({
      ...formData, // 이전 데이터
      [name]: value
    });
  }; // 여기 데이터는 계속해서 사용가능

  const handleSubmit = (e) => {
    e.preventDefault(); // 데이터 2번 전송됨
    console.log('Form data submitted:', formData); // 데이터 확인하기위해서 사용
    // Here you can handle the form submission, e.g., send data to the server
  };

  return ( // 이 데이터를 상황에 맞게 변경해서 사용
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
