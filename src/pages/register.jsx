import React from 'react';
import { useState } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName, password)
  }
  return (
    <>
    <div className="flex justify-content-center">
        <Card title="Register" className="mt-8">
          <form>
            <div className="flex flex-column mb-3">
              <label>Username</label>
              <InputText
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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