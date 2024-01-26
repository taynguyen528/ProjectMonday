import { useState } from "react";
import "../assets/styles/signup.css";
import imgSignup from "../assets/img/img-signup.png";
import imgLogo from "../assets/img/logoMonday.png";
import { useNavigate } from "react-router-dom";
import ButtonContinue from "../components/ButtonContinue";

function CreateAccount() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/Question");
  };
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [accountName, setAccountName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [accountNameError, setAccountNameError] = useState("");

  const [marginBottom, setMarginBottom] = useState("30px");

  const handle = () => {
    setFullNameError("");
    setPasswordError("");
    setAccountNameError("");

    if (!fullName.trim()) {
      setFullNameError("Enter your full name");
      setMarginBottom("0");
    } else {
      setFullNameError("");
    }

    if (!password.trim()) {
      setPasswordError("Create a password");
      setMarginBottom("0");
    } else if (password.length < 8) {
      setPasswordError("Password must be 8 characters or more");
      setMarginBottom("0");
    } else {
      setPasswordError("");
      handleNext();
    }

    if (!accountName.trim()) {
      setAccountNameError("Name your account");
      setMarginBottom("0");
    } else if (accountName.length <= 3) {
      setAccountNameError("Account Name must be more than 3 characters");
      setMarginBottom("0");
    } else {
      setAccountNameError("");
    }

    console.log("button on clicked");
  };

  return (
    <>
      <div className="createAccount">
        <div className="info">
          <div className="info__wrap">
            <img src={imgLogo} alt="logo"></img>
            <h2>Create your account</h2>
            <form>
              <label htmlFor="fullName">Full Name</label>
              <br />
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                style={{ marginBottom: `${marginBottom}` }}
                onChange={(e) => setFullName(e.target.value)}
              />
              <span
                className="error"
                style={{ color: "red", marginBottom: "30px" }}
              >
                {fullNameError}
              </span>
              <br />
              {/* Password */}
              <label htmlFor="passWord">Password</label>
              <br />
              <input
                id="passWord"
                type="password"
                placeholder="Enter at least 8 characters"
                value={password}
                style={{ marginBottom: `${marginBottom}` }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="error"
                style={{ color: "red", marginBottom: "30px" }}
              >
                {passwordError}
              </span>
              <br />
              {/* Account name */}
              <label htmlFor="accountName">Account Name</label>
              <br />
              <input
                id="accountName"
                type="text"
                placeholder="For example, company's or department's name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                style={{ marginBottom: `${marginBottom}` }}
              />
              <span
                className="error"
                style={{ color: "red", marginBottom: "30px" }}
              >
                {accountNameError}
              </span>
            </form>
            <div className="wrapBtn">
              <ButtonContinue onClick={handle}></ButtonContinue>
            </div>
          </div>
        </div>
        <div className="signup__img">
          <img src={imgSignup} alt="signup" />
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
