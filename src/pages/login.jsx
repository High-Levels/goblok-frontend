import { useRef, useState } from "react";
// import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Particle from "../component/BackgroundParticles";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  const toast = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(userName, password);
      // showToast();
      toast.success("Login success!");
      navigate("/");
      // setIsLoading(false)
    } catch (error) {
      // setIsLoading(false)
      // setError(error.message)
      // console.log(error.message);
      toast.current.show({
        severity: "error",
        summary: "Error Message",
        detail: "Login failed!",
      });
    }
  };
  return (
    <>
      <Particle />
      <div className="flex justify-content-center">
        <Card title="Login" className="mt-8 z-1 opacity-70">
          <form>
            <Toast ref={toast} />
            <div className="flex flex-column mb-4">
              <span className="p-float-label">
                <InputText
                  id="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="username">Username</label>
              </span>
            </div>
            <div className="flex flex-column mb-4">
              <span className="p-float-label">
                {/* <Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                toggleMask
              /> */}
                <InputText
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  // toggleMask
                />
                <label>Password</label>
              </span>
            </div>
            <Button
              label="Submit"
              className="w-full mb-4"
              onClick={handleSubmit}
              type="submit"
              icon="pi pi-check"
            />
            <div>
              Do not have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Login;
