import React from 'react';
import { useState } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [regis, setRegis]= useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setRegis({ ...regis, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name, email, password);
    try{
      // console.log(regis)
      const response = registerUser(regis);
      console.log(response.regis);
      navigate("/login")
    } catch (error){
      console.log("error");
    }
  }
  return (
    <>
    <div className="flex justify-content-center">
        <Card title="Register" className="mt-8">
          <form>
            <div className="flex flex-column mb-3">
              <label>Username</label>
              <InputText
                value={regis.username}
                name="username"
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex flex-column mb-3">
              <label>Email</label>
              <InputText
                value={regis.email}
                onChange={handleChangeInput}
                name="email"
              />
            </div>
            <div className="flex flex-column mb-3">
              <label>Password</label>
              <Password
                value={regis.password}
                onChange={handleChangeInput}
                name="password"
                toggleMask
              />
            </div>
            <Button label="Submit" className="w-full" onClick={handleSubmit} type="submit" icon="pi pi-check"/>
          </form>
        </Card>
      </div>
    </>
  )
}

export default Register