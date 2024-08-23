import { useState } from "react";
import axios from "axios";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Inputs/Input/Input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const [ValueState, setValueState] = useState({
    username: "",
    password: "",
  });

  const HandleChangeValue = (e) => {
    setValueState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/signin", ValueState)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((rej) => toast.error(rej.response.data.message));
  };

  return (
    <form onSubmit={handleLogin} className="Login flex items-center  h-[100vh]">
      <div className="login__input-box  bg-white rounded-md w-[70%] max-w-[20rem] flex flex-col items-center relative m-auto p-4">
        <Input
          name={"username"}
          inputClassName={"w-full"}
          placeholder={"نام کاربری"}
          value={ValueState.username}
          onChange={HandleChangeValue}
        />
        <Input
          name={"password"}
          inputClassName={"w-full"}
          placeholder={"رمز عبور"}
          value={ValueState.password}
          onChange={HandleChangeValue}
        />
        <Button className={"px-4 bg-[#22c55e] w-full"} onClick={handleLogin}>
          ورود
        </Button>
      </div>
    </form>
  );
};
