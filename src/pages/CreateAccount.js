import "../assets/styles/signup.css";
import imgSignup from "../assets/img/img-signup.png";
import imgLogo from "../assets/img/logoMonday.png";

function CreateAccount() {
    return (
        <>
            <div className="createAccount">
                <div className="info">
                    <div className="info__wrap">
                        <img src={imgLogo}></img>
                        <h2>Create your account</h2>
                        <form>
                            <label for="fullName">Full Name</label>
                            <br></br>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Enter your full name"
                            ></input>
                            <br></br>
                            {/* Password */}
                            <label for="passWord">Password</label>
                            <br></br>
                            <input
                                id="passWord"
                                type="password"
                                placeholder="Enter at least 8 characters"
                            ></input>
                            <br></br>
                            {/* Account name */}
                            <label for="accountName">Account Name</label>
                            <br></br>
                            <input
                                id="accountName"
                                type="text"
                                placeholder="For example, company's or department's name"
                            ></input>
                        </form>
                        <div className="act_btn">
                            <button>Continue</button>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="signup__img">
                    <img src={imgSignup} alt="img_signup"></img>
                </div>
            </div>
        </>
    );
}

export default CreateAccount;
