import React, { useState } from 'react'
import "./entry.style.css";
import {LoginForm} from '../../components/login/Login.comp';
import {ResetPassword} from '../../components/password-reset/PasswordReset.comp';
// import { useState } from "react";

export const Entry = () => {
  // const [email, setEmail] = useState("");
  // const [password,setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login")
  // const handleOnechange = (e) => {
  //   const {name,value} = e.target;
  //   console.log(name,value);
  // }
 
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType)
  }
  return (
    <div className='entry-page bg-info'>
        <div className="jumbotron">
          {frmLoad === 'login' && <LoginForm formSwitcher={formSwitcher}/> }
          {frmLoad === 'reset' && <ResetPassword formSwitcher={formSwitcher}/> }
          
        </div>
     </div>
  )
}
