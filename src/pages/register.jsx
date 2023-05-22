import React from 'react';
import { useState } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name, email, password);
    try{
      const response = registerUser(name, email, password);
      console.log(response.data);
      navigate("/login")
    } catch (error){
      console.log(error.response.data);
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-column mb-3">
              <label>Username</label>
              <InputText
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-column mb-3">
              <label>Password</label>
              <Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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