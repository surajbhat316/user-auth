import React, { useState } from "react";
import style from "../SignUp/SignUp.module.css";
import styleLogin from "./Login.module.css";
import { Link } from "react-router";
import { LuEye } from "react-icons/lu";
import "../../media/SignUp.css"
export default function Login() {

    const [inputTypeConfirm, setInputTypeConfirm] = useState("password");
     const toggleInputTypeConfirmNewPassword = () => {
    if (inputTypeConfirm === "password") {
      setInputTypeConfirm("text");
    } else {
      setInputTypeConfirm("password");
    }
  };
  return (
    <div className={style.parent_container}>
      <div className={style.container}>
        <header style={{ height: "auto" }}>
          <p>Log in</p>
          <p style={{ fontSize: "20px" }}>Sign in to continue</p>
        </header>

        <main className="media_main">
          <div className={styleLogin.container}>
            <input type="text" placeholder="USERNAME" />

            <div>
              <input type={inputTypeConfirm} placeholder="NEW PASSWORD" />
              <LuEye onClick={toggleInputTypeConfirmNewPassword} className={styleLogin.iconStyle} />
            </div>
            <br />
          </div>
        </main>

        <footer className={`${styleLogin.footer} media_footer`}>
          <button>login</button>
          <div>
            Don't have and account,
            <Link to={"/"}>Sign In</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
