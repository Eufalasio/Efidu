import React from 'react';
import { useState } from 'react';
import RegisterForm from './RegisterForm';
import './Register.css';
function Register(){
    const [role, setRole] = useState('student');
    return(<div className='register'>
            <RegisterForm role='teacher'/>
            <RegisterForm role={role}/>
            </div>
        )
}


export default Register;