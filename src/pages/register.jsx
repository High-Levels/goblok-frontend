import React from 'react';
import { useState, useRef } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import Particle from '../component/BackgroundParticles';
import {Toast} from 'primereact/toast';
import Navbar from '../component/Navbar';

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass]= useState("");
  const [emailError, setEmailError]= useState("")
  const [isButtonDissable, setIsButtonDissable]= useState(true);
  const [regis, setRegis] = useState({
    username: "",
    email: "",
    password: ""
  })
  const toastRef= useRef(null);
  const validatePass = ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regis.username.length,regis.email <1){
      setIsButtonDissable(true);
    }
    else if(regis.password !== confirmPass){
      setIsButtonDissable(true);
    }else{
      setIsButtonDissable(false);
    }
  }
  const validateEmail = () =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(regis.email)){
      setEmailError("itu bukan email bgsd!");
    }else{
      setEmailError("");
    }
  }
  
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setRegis({ ...regis, [name]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(regis)
      const response = await registerUser(regis);
      console.log(response.regis);
      navigate("/login")
    } catch (error) {
      toastRef.current.show({ severity: 'error', summary: 'Registrasi Gagal', detail: 'Username atau Email sudah ada' });
    }
  }
  return (
    <>
      <Particle/>
      <div className="flex justify-content-center">
        <Card title="Register" className="mt-8 z-1 opacity-70">
          <Toast ref={toastRef}/>
          <form>
            <div className="flex flex-column mb-4">
              <span className='p-float-label'>
                <InputText
                  id='username'
                  value={regis.username}
                  name="username"
                  onChange={handleChangeInput}
                  onBlur={validatePass}
                  style={{width:"260px"}}
                />
                <label htmlFor='username'>Username</label>
              </span>
            </div>
            <div className="flex flex-column mb-4">
              <span className='p-float-label'>
                <InputText
                  id='email'
                  value={regis.email}
                  onChange={handleChangeInput}
                  name="email"
                  onBlur={validateEmail}
                  style={{width:"260px"}}
                  />
                <label htmlFor='email'>Email</label>
              </span>
                  {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
            </div>
            <div className="flex flex-column mb-4">
              <span className='p-float-label'>
                <Password
                  id='password'
                  value={regis.password}
                  onChange={handleChangeInput}
                  name="password"
                  onBlur={validatePass}
                  toggleMask
                />
                <label htmlFor='pasword'>Password</label>
              </span>
            </div>
            <div className="flex flex-column mb-4">
              <span className='p-float-label'>
                <Password
                  id='password'
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  name="password"
                  onBlur={validatePass}
                  toggleMask
                />
                <label htmlFor='pasword'>Confirm Password</label>
              </span>
            </div>
            <Button
             label="Submit"
             className="w-full custom-button"
             onClick={handleSubmit} 
             type="submit" 
            //  icon="pi pi-check"
             disabled={isButtonDissable}
              />
              <div className='flex flex-column mb-4'>
                <p>Do you have account?<span><a href='/login'>Login</a></span></p>
              </div>
          </form>
        </Card>
      </div>
    </>
  )
}

export default Register;