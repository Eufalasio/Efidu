import React from 'react';
import { useState } from 'react';
import RegisterForm from './RegisterForm';
function Register(){
    const [role, setRole] = useState('student');
    return(<div className='register'>
            <RegisterForm role={role}/>

            <RegisterForm role='teacher'/>
            </div>
        )
}


export default Register;