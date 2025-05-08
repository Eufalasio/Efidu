import React, { useState } from 'react';

const RegisterForm = ({role}) => {
  return (<>
            <div>
              <h2>Fill your info</h2>
              {role === 'teacher' && (
                <>
                  <input type="text" name="accessCode" placeholder="Access Code: " required/>
                  <br/>
                </>
              )}
              <input type="email" name="email" placeholder="Enter email: " required/>
              <br/>
              <input type="text" name="username" placeholder="Enter username: " required/>
              <br/> 
              <input type="text" name="password" placeholder="Enter password: " required/>
              <br/>
              <hr/>

              <input type="text" name="firstName" placeholder="Enter first name: " required/>
              <br/>
              <input type="text" name="lastName" placeholder="Enter last name: " required/>
              <br/>
              <label htmlFor="dob">Enter your date of birth: </label>
              <input type="date" name="dob" placeholder="Enter date of birth: " required/>
              <br/>

              <select name="gender" id="gender" required>
                <option value="" disabled selected>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>  
              </select>
              {role === 'student' && (
                <select name="schoolYear" id="schoolYear" required>
                  <option value="" disabled selected>School Year</option>
                  <option value="1">9th</option>
                  <option value="2">10th</option>
                  <option value="3">11th</option>
                  <option value="4">12th</option>
                </select>
              )}


              <hr/>

              <button type="submit">Register</button>

            </div>
          </>)

};


export default RegisterForm;