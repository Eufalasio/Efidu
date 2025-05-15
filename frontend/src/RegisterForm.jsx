import React, { useState } from 'react';
import './Register.css';

const RegisterForm = ({role}) => {
    let formInput = `formInput-${role}`;
  return (
        
            <div className="registerForm">
              <h2>Fill your info</h2>
              {role === 'teacher' && (
                <>
                  <input className={`formInput ` + formInput} type="text" name="accessCode" placeholder="Access Code: " required/>
                  <br/>
                </>
              )}
              <input className={`formInput ` + formInput} type="email" name="email" placeholder="Enter email: " required/>
              <br/>
              <input className={`formInput ` + formInput} type="text" name="username" placeholder="Enter username: " required/>
              <br/> 
              <input className={`formInput ` + formInput} type="password" name="password" placeholder="Enter password: " required/>
              <br/>
              <hr/>

              <input className={`formInput ` + formInput} type="text" name="firstName" placeholder="Enter first name: " required/>
              <br/>
              <input className={`formInput ` + formInput} type="text" name="lastName" placeholder="Enter last name: " required/>
              <br/>
              <label htmlFor="dob">Enter your date of birth: </label>
              <input className={`formInput ` + formInput} type="date" name="dob" placeholder="Enter date of birth: " required/>
              <br/>

              <select className={`formInput ` + formInput} name="gender" id="gender" required>
                <option value="" disabled defaultValue={""}>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>  
              </select>
              {role === 'student' && (
                <select className={`formInput ` + formInput} name="schoolYear" id="schoolYear" required>
                  <option value="" disabled defaultValue={""}>School Year</option>
                  <option value="1">9th</option>
                  <option value="2">10th</option>
                  <option value="3">11th</option>
                  <option value="4">12th</option>
                </select>
              )}


              <hr/>

              <button type="submit">Register</button>

            </div>
          )

};


export default RegisterForm;