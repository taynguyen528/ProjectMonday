import question3 from "../assets/img/question3.png";
import imgLogo from "../assets/img/logoMonday.png";
import ButtonContinue from "../components/ButtonContinue";
import ButtonBack from "../components/ButtonBack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/Question3.css";
import InputComponent from "../components/InputComponent";
function Question3() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/LastQuestion");
    };

    const handleBack = () => {
        navigate("/Question2");
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
            <div className="question3Page">
                <div className="question3Content">
                    <img src={imgLogo} className="imgLogo"></img>
                    <div className="question">
                        <h1>Select what you'd like to focus on first</h1>
                        <h2>Help us tailor the best experience for you</h2>
                        <div className="wrapFormQuestion3">
                            <form>
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Individual work"
                                    value="Individual work"
                                    label="Individual work"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Business operations"
                                    value="Business operations"
                                    label="Business operations"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="PortfolioManagement"
                                    value="Portfolio management"
                                    label="Portfolio management"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Task management"
                                    value="Task management"
                                    label="Task management"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Administrative work"
                                    value="Administrative work"
                                    label="Administrative work"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Academic research"
                                    value="Academic research"
                                    label="Academic research"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Requests and approvals"
                                    value="Requests and approvals"
                                    label="Requests and approvals"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="CRM"
                                    value="CRM"
                                    label="CRM"
                                    onChange={handleOptionChange}
                                />

                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Curriculum and Syllabus management"
                                    value="Curriculum and Syllabus management"
                                    label="Curriculum and Syllabus management"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Resource management"
                                    value="Resource management"
                                    label="Resource management"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Goals and strategy"
                                    value="Goals and strategy"
                                    label="Goals and strategy"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Project management"
                                    value="Project management"
                                    label="Project management"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Group assignments"
                                    value="Group assignments"
                                    label="Group assignments"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Student organizations"
                                    value="Student organizations"
                                    label="Student organizations"
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="inputQuestion3"
                                    id="Other"
                                    value="Other"
                                    label="Other"
                                    onChange={handleOptionChange}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="group_action">
                        <ButtonBack onClick={handleBack}></ButtonBack>
                        <ButtonContinue
                            onClick={(handleContinueClick, handleNext)}
                            disabled={!selectedOptions.length}
                        ></ButtonContinue>
                    </div>
                </div>
                <div className="question3_img">
                    <img
                        src={question3}
                        alt="img_question3"
                        className="imgQuestion3"
                    ></img>
                </div>
            </div>
        </>
    );
}

export default Question3;
