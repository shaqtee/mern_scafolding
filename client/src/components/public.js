import { useState } from "react";
import { useNavigate } from "react-router-dom";

import fetchData from "../hook/login.js";
import pullData from "../hook/register.js";
import { ModalLogin } from "./partials/ModalLogin.js";
import { ModalRegister } from "./partials/ModalRegister.js";

const Home = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(false);
  const defaultState = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setMessage(false);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const getAuth = async () => {
    if (username == "" || password == "")
      return setMessage("Email dan Password tidak boleh kosong");

    const { redirect } = await fetchData(username, password);
    if (!redirect) return setMessage("Email atau Password salah");

    switch (redirect.isAdmin) {
      case true:
        navigate("/admin", { state: redirect });
        break;
      case false:
        navigate("/member", { state: redirect });
        break;
    }
  };

  const getRegister = async () => {
    const pattern = /^[\w\.]+@\w+(\.\w+)$/gm;

    if (!username || !password || !email) {
      setMessage("tidak boleh kosong!");
    } else if (email.match(pattern) === null) {
      setMessage("email tidak valid!");
    } else {
      setData({ username, password, email });
      const { res } = await pullData(data);
      res ? await getAuth() : setMessage("username already exist!");
    }
  };

  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <div className="navbar dark:bg-slate-800 rounded-b-lg">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl text-error">
            daisyUI
            <span onClick={() => console.log("test")}>®</span>
          </a>
        </div>

        <div className="navbar-end gap-2">
          <label
            htmlFor="login-modal"
            className="btn modal-button"
            onClick={defaultState}
          >
            Sign in
          </label>
          <label
            htmlFor="register-modal"
            className="btn modal-button"
            onClick={defaultState}
          >
            Register
          </label>
        </div>
      </div>

      {/* List */}
      <div className="mockup-code mt-3">
        <pre data-prefix="">
          <code>npm install</code>
        </pre>
        <pre data-prefix="1" className="bg-warning text-warning-content">
          <code>npm run dev</code>
        </pre>
        <pre data-prefix="2">
          <code>
            <span className="text-green-500">✔</span> ready daisyUi
          </code>
        </pre>
        <pre data-prefix="3">
          <code>
            <span className="text-green-500">✔</span> ready redux
          </code>
        </pre>
        <pre data-prefix="4">
          <code>
            <span className="text-green-500">✔</span> ready axios
          </code>
        </pre>
        <pre data-prefix="5">
          <code>
            <span className="text-green-500">✔</span> ready react-router-dom
          </code>
        </pre>
        <pre data-prefix="6">
          <code>
            <span className="text-green-500">✔</span> ready package.json (proxy
            8080)
          </code>
        </pre>
        <pre data-prefix="7">
          <code>
            <span className="text-green-500">✔</span> ready tailwind.config.js
            (theme)
          </code>
        </pre>
      </div>

      <ModalLogin
        id="login-modal"
        message={message}
        val1={getUsername}
        val2={getPassword}
        auth={getAuth}
      />
      <ModalRegister
        id="register-modal"
        message={message}
        val1={getUsername}
        val2={getPassword}
        val3={getEmail}
        reg={getRegister}
      />
    </div>
  );
};

export default Home;
