import React, { useState } from "react";
import style from "./SignUp.module.css";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router";
import "../../media/SignUp.css"

function SignUp() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");

  const [inputType, setInputType] = useState("password");
  const [inputTypeConfirm, setInputTypeConfirm] = useState("password");

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const regex = /^[a-zA-Z]*$/;
    const test = regex.test(e.target.value);
    if (test) {
      setName(e.target.value);
      setNameError("");
      return;
    }
    setNameError("Name Cannot Contain Numbers");
  };

  const handleUserNameChange = (e) => {
    const regex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$&*])[a-zA-Z0-9!@#$&*]+$/;
    const test = regex.test(e.target.value);
    if (!test) {
      setUserNameError("Invalid UserName");
    } else {
      setUserNameError("");
    }
    setUserName(e.target.value);
  };

  const hanldeEmailChange = (e) => {
    const regex = /[a-zA-Z0-9]+@gmail.com$/;
    const test = regex.test(e.target.value);
    console.log(test);
    if (!test) {
      setEmailError("Enter a valid Email");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const regex = /^\+\d{12}$/;
    const test = regex.test(e.target.value);

    console.log(test);
    if (!test) {
      setPhoneNumberError("Enter a valid phone number");
    } else {
      setPhoneNumberError("");
    }
    setPhoneNumber(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    const regex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$&*])[a-zA-Z0-9!@#$&*]+$/;
    const test = regex.test(e.target.value);

    setNewPassword(e.target.value);
    console.log({ userName, newPassword });
    if (!test) {
      setNewPasswordError("Invalid Password");
    } else {
      if (userName === e.target.value) {
        setNewPasswordError("UserName and Password cannot be same");
      } else {
        setNewPasswordError("");
      }
    }
  };

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value !== newPassword) {
      setConfirmNewPasswordError("Passwords do not match");
    } else {
      setConfirmNewPasswordError("");
    }
    setConfirmNewPassword(e.target.value);
  };

  const toggleInputTypeNewPassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const toggleInputTypeConfirmNewPassword = () => {
    if (inputTypeConfirm === "password") {
      setInputTypeConfirm("text");
    } else {
      setInputTypeConfirm("password");
    }
  };

  const handleSubmit = () => {
    if(!nameError && !userNameError && !emailError && !phoneNumberError && !confirmNewPasswordError && !newPasswordError){
      navigate("/login")
    }
  }

  return (
    <div className={style.parent_container}>
      <div className={style.container}>
        <header>Create new Account</header>
        <main>
          <form className={`${style.form_container} media_form`}>
            <div className={style.left}>
              <div>
                <input
                  type="text"
                  onChange={(e) => handleNameChange(e)}
                  value={name}
                  placeholder="NAME"
                /><br/>
                <small>{nameError ? nameError : ""}</small>
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => hanldeEmailChange(e)}
                  value={email}
                  placeholder="EMAIL"
                />
                <br/>
                <small>{emailError ? emailError : ""}</small>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={inputType}
                  onChange={(e) => handleNewPasswordChange(e)}
                  value={newPassword}
                  placeholder="NEW PASSWORD"
                />
                <LuEye
                  onClick={toggleInputTypeNewPassword}
                  className={`${style.icon} media_icon`}
                />
                <br />

                <small>{newPasswordError ? newPasswordError : ""}</small>
              </div>
            </div>

            <div className={style.right}>
              <div>
                <input
                  type="text"
                  onChange={(e) => handleUserNameChange(e)}
                  value={userName}
                  placeholder="USERNAME"
                />
                <br/>
                <small>{userNameError ? userNameError : ""}</small>
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => handlePhoneNumberChange(e)}
                  value={phoneNumber}
                  placeholder="PHONE NUMBER"
                />
                <br/>
                <p style={{ marginLeft: "2rem" }}>
                  {phoneNumberError ? phoneNumberError : ""}
                </p>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={inputTypeConfirm}
                  onChange={(e) => handleConfirmPasswordChange(e)}
                  value={confirmNewPassword}
                  placeholder="CONFIRM NEW PASSWORD"
                />
                <LuEye
                  onClick={toggleInputTypeConfirmNewPassword}
                  className={`${style.icon} media_icon`}
                />
                <br />

                <small>
                  {" "}
                  {confirmNewPasswordError ? confirmNewPasswordError : ""}
                </small>
              </div>
            </div>
          </form>
        </main>

        <footer>
          <button className="media_btn" onClick={handleSubmit}>Sign Up</button>
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
