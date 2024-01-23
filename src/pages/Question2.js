import question2 from "../assets/img/question2.png";
import imgLogo from "../assets/img/logoMonday.png";
import "../assets/styles/Question2.css";
import ButtonContinue from "../components/ButtonContinue";
import ButtonBack from "../components/ButtonBack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Question2() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/Question3");
    };

    const handleBack = () => {
        navigate("/Question");
        console.log(123);
    };
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (value) => {
        const isSelected = selectedOptions.includes(value);

        setSelectedOptions((prevOptions) =>
            isSelected
                ? prevOptions.filter((option) => option !== value)
                : [...prevOptions, value]
        );
    };

    const handleContinueClick = () => {
        return;
    };
    return (
        <>
            <div className="question2Page">
                <div className="question2Content">
                    <img src={imgLogo} className="imgLogo"></img>
                    <div className="question">
                        <h1>How many people are on your team?</h1>
                        <form>
                            <div className="wrapForm">
                                <div className="wrapInput ">
                                    <input
                                        type="radio"
                                        name="group1"
                                        id="Only me"
                                        value="Only me"
                                        onChange={handleOptionChange}
                                    ></input>
                                    <label for="Only me" className="nowrap">
                                        Only me
                                    </label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        name="group1"
                                        id="2-5"
                                        value="2-5"
                                        onChange={handleOptionChange}
                                    ></input>
                                    <label for="2-5">2-5</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        name="group1"
                                        id="6-10"
                                        value="6-10"
                                        onChange={handleOptionChange}
                                    ></input>
                                    <label for="6-10">6-10</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        name="group1"
                                        id="11-15"
                                        value="11-15"
                                        onChange={handleOptionChange}
                                    ></input>
                                    <label for="11-15">11-15</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        name="group1"
                                        id="16-25"
                                        value="16-25"
                                        onChange={handleOptionChange}
                                    ></input>
                                    <label for="16-25">16-25</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        name="group1"
                                        id="25-50"
                                        value="25-50"
                                        onChange={handleOptionChange}
                                    ></input>
                                    <label for="25-50">25-50</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        name="group1"
                                        id="51-100"
                                        value="51-100"
                                        onChange={handleOptionChange}
                                    ></input>
                                    <label for="51-100">51-100</label>
                                </div>
                                <div className="wrapInput">
                                    <input
                                        type="radio"
                                        name="group1"
                                        id="101-500"
                                        value="101-500"
                                        onChange={handleOptionChange}
                                    ></input>
                                    <label for="101-500">101-500</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="group_action">
                        <ButtonBack onClick={handleBack}></ButtonBack>
                        <ButtonContinue
                            onClick={(handleContinueClick, handleNext)}
                            disabled={!selectedOptions.length}
                        ></ButtonContinue>
                    </div>
                </div>
                <div className="question2_img">
                    <img
                        src={question2}
                        alt="img_question2"
                        className="imgQuestion2"
                    ></img>
                </div>
            </div>
        </>
    );
}

export default Question2;
