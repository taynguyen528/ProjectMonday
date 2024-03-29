import "../assets/styles/signup.css";
import imgSignup from "../assets/img/img-signup.png";
import imgLogo from "../assets/img/logoMonday.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
function Question() {
    const [selectedReason, setSelectedReason] = useState(null);
    const handleReasonChange = (reason) => {
        setSelectedReason(reason);
    };

    const isContinueDisabled = selectedReason === null;
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/Question2");
    };

    return (
        <>
            <div className="questionPage">
                <div className="question">
                    <div className="question__wrap">
                        <img src={imgLogo}></img>
                        <div className="questionBlock">
                            <h1>Hey there, what brings you here today?</h1>
                            <form>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        id="work"
                                        name="reason"
                                        value="work"
                                        onChange={() =>
                                            handleReasonChange("work")
                                        }
                                    ></input>
                                    <label for="work">Work</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        id="personal"
                                        name="reason"
                                        value="personal"
                                        onChange={() => {
                                            handleReasonChange("personal");
                                        }}
                                    ></input>
                                    <label for="personal">Personal</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        id="school"
                                        name="reason"
                                        value="school"
                                        onChange={() =>
                                            handleReasonChange("school")
                                        }
                                    ></input>
                                    <label for="school">School</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        id="nonprofits"
                                        name="reason"
                                        value="nonprofits"
                                        onChange={() =>
                                            handleReasonChange("nonprofits")
                                        }
                                    ></input>
                                    <label for="nonprofits">Nonprofits</label>
                                </div>
                            </form>
                        </div>
                        <div
                            className="answerBlock"
                            style={{
                                display:
                                    selectedReason &&
                                    selectedReason !== "personal"
                                        ? "block"
                                        : "none",
                            }}
                        >
                            <h1>What best describes your current role?</h1>
                            {selectedReason === "work" && (
                                <form className="workAnswer">
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Business owner"
                                            name="reason"
                                            value="Business owner"
                                        ></input>
                                        <label for="Business owner">
                                            Business owner
                                        </label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Team leader"
                                            name="reason"
                                            value="Team leader"
                                        ></input>
                                        <label for="Team leader">
                                            Team leader
                                        </label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Team member"
                                            name="reason"
                                            value="Team member"
                                        ></input>
                                        <label for="Team member">
                                            Team member
                                        </label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="freelancer"
                                            name="reason"
                                            value="freelancer"
                                        ></input>
                                        <label for="freelancer">
                                            Freelancer
                                        </label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="director"
                                            name="reason"
                                            value="director"
                                        ></input>
                                        <label for="director">Director</label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="C-Level"
                                            name="reason"
                                            value="C-Level"
                                        ></input>
                                        <label for="C-Level">C-Level</label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="VP"
                                            name="reason"
                                            value="VP"
                                        ></input>
                                        <label for="VP">VP</label>
                                    </div>
                                </form>
                            )}
                            {/* School */}
                            {selectedReason === "school" && (
                                <form className="schoolAnswer">
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Undergraduate student"
                                            name="reason"
                                            value="Undergraduate student"
                                        ></input>
                                        <label for="Undergraduate student">
                                            Undergraduate student
                                        </label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Graduate student"
                                            name="reason"
                                            value="Graduate student"
                                        ></input>
                                        <label for="Graduate student">
                                            Graduate student
                                        </label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Faculty member"
                                            name="reason"
                                            value="Faculty member"
                                        ></input>
                                        <label for="Faculty member">
                                            Faculty member
                                        </label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Other"
                                            name="reason"
                                            value="Other"
                                        ></input>
                                        <label for="Other">Other</label>
                                    </div>
                                </form>
                            )}
                            {selectedReason === "nonprofits" && (
                                <form className="nonprofitAnswer">
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Board member"
                                            name="reason"
                                            value="Board member"
                                        ></input>
                                        <label for="Board member">
                                            Board member
                                        </label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Executive"
                                            name="reason"
                                            value="Executive"
                                        ></input>
                                        <label for="Executive">Executive</label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Employee"
                                            name="reason"
                                            value="Employee"
                                        ></input>
                                        <label for="Employee">Employee</label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Volunteer"
                                            name="reason"
                                            value="Volunteer"
                                        ></input>
                                        <label for="Volunteer">Volunteer</label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="IT staff"
                                            name="reason"
                                            value="IT staff"
                                        ></input>
                                        <label for="IT staff">IT staff</label>
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="radio"
                                            id="Other"
                                            name="reason"
                                            value="Other"
                                        ></input>
                                        <label for="Other">Other</label>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                    <Button
                        type="primary"
                        className="custom-btn-continue"
                        disabled={isContinueDisabled}
                        onClick={handleNext}
                    >
                        <span>Continue</span>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Button>
                    <div className="signup__img">
                        <img src={imgSignup} alt="img_signup"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Question;
