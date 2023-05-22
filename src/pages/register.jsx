import React from 'react';
import { useState } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import Particle from '../component/BackgroundParticles';

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
      alert("Username atau email sudah ada!");
    }
  }
  return (
    <>
    <div>
      <Particle/>
      <div className="flex justify-content-center">
        <Card title="Register" className="mt-8">
          <form>
            <div className="flex flex-column mb-4">
              <span className='p-float-label'>
                <InputText
                  id='username'
                  value={regis.username}
                  name="username"
                  onChange={handleChangeInput}
                  onBlur={validatePass}
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
                />
                <label htmlFor='email'>Email</label>
              {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
              </span>
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
             className="w-full"
             onClick={handleSubmit} 
             type="submit" 
             icon="pi pi-check"
             disabled={isButtonDissable}
              />
          </form>
        </Card>
      </div>
      </div>
    </>
  )
}

export default Register;