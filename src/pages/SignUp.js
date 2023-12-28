import "../assets/styles/signup.css";
import imgSignup from "../assets/img/img-signup.png";
import icGoogle from "../assets/img/ic-google.png";

function SignUp() {
    return (
        <>
            <main className="signup">
                <div className="signup__content">
                    <div className="signup__title">
                        <h1>Welcome to monday.com</h1>
                        <h2 style={{ marginTop: "10px" }}>
                            Get started - it's free. No credit card needed.
                        </h2>
                    </div>
                    <div className="signup__google">
                        <button className="google-login-button">
                            <img
                                className="google-icon"
                                src={icGoogle}
                                alt="Google Icon"
                            />
                            Continue with Google
                        </button>
                    </div>
                    <div className="separate">
                        <div className="separate__hori"></div>
                        <div className="separate__text">Or</div>
                        <div className="separate__hori"></div>
                    </div>
                    <form>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@company.com"
                            className="email"
                        ></input>
                        <button className="btn-continue">Continue</button>
                    </form>

                    <div className="sign__note">
                        By proceeding, you agree to the <br />
                        <a href="https://monday.com/l/legal/tos/">
                            Terms of Service
                        </a>
                        &nbsp; and &nbsp;
                        <a href="https://monday.com/l/privacy/privacy-policy/">
                            Privacy Policy
                        </a>
                    </div>

                    <div className="backLogin">
                        Already have an account? &nbsp;
                        <a href="https://auth.monday.com/auth/login_monday/">
                            Log in
                        </a>
                    </div>
                </div>
                <div className="signup__img">
                    <img src={imgSignup} alt="img_signup"></img>
                </div>
            </main>
        </>
    );
}

export default SignUp;
