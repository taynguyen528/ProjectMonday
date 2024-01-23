import imgLogo from "../assets/img/logoMonday.png";
import "../assets/styles/CreateBoard.css";
import "../assets/styles/addColumnBoard.css";
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { Table } from "antd";

function CreateBoard() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/AddColumnBoard", {
            state: { boardName: document.getElementById("nameBoard").value },
        });
    };

    const handleBoardNameChange = () => {
        const inputElement = document.getElementById("nameBoard");
        const nextButton = document.querySelector(".btn__next button");
        const lineMain = document.querySelector(".line.main");

        if (inputElement.value !== "") {
            nextButton.removeAttribute("disabled");
            lineMain.innerText = inputElement.value;
            lineMain.style.height = "auto";
            lineMain.style.margin = "0 0 0 32px";
            lineMain.style.background = "transparent";
            lineMain.style.color = "#676879";
            lineMain.style.fontSize = "32px";
            lineMain.style.width = "100%";
            lineMain.style.marginBottom = "40px";
        } else {
            nextButton.setAttribute("disabled", true);
            lineMain.innerText = "";
            lineMain.style.height = "8px";
            lineMain.style.margin = "12px 0px 70px 32px";
            lineMain.style.background = "#c3c6d4";
            lineMain.style.color = "";
            lineMain.style.fontSize = "";
            lineMain.style.width = "";
        }
    };

    const columns = [
        {
            title: <span className="content_col"></span>,
            dataIndex: "content",
            key: "1",
        },
        {
            title: <span className="content_col"></span>,
            dataIndex: "content",
            key: "2",
        },
        {
            title: <span className="content_col"></span>,
            dataIndex: "content",
            key: "3",
        },
    ];

    const data = [
        {
            key: "",
            content: <span className="content_col2"></span>,
        },
        {
            key: "",
            content: <span className="content_col2"></span>,
        },
        {
            key: "",
            content: <span className="content_col2"></span>,
        },
    ];
    const defaultCheckedList = columns.map((item) => item.key);

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const options = columns.map(({ key, title }) => ({
        label: title,
        value: key,
    }));
    const newColumns = columns.map((item) => ({
        ...item,
        hidden: !checkedList.includes(item.key),
    }));

    return (
        <>
            <div className="createBoardPage">
                <div className="createBoardWrap">
                    <div className="createBoardContent">
                        <img src={imgLogo}></img>
                        <div className="createBoardTitle">
                            <h1>Let's start working together</h1>
                            <h2>
                                Give your board a name, e.g. marketing plan,
                                sales pipeline, quarterly, roadmap,..
                            </h2>
                        </div>
                        <input
                            type="text"
                            placeholder="My first board"
                            id="nameBoard"
                            required
                            onChange={handleBoardNameChange}
                        ></input>
                        <div className="note">
                            In monday.com, "boards" are the place where all your
                            content lives
                        </div>
                        <div className="btn__next" onClick={() => handleNext()}>
                            <button className="next" disabled>
                                Next
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="overlayCreateBoard">
                        <div className="overlay">
                            <div className="overlayWrap">
                                <button>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                                <div className="board">
                                    <div className="wrapBoard">
                                        <div className="line main"></div>
                                        <div className="table">
                                            <div className="line_blue"></div>

                                            <Table
                                                columns={newColumns}
                                                dataSource={data}
                                                pagination={false}
                                                style={{
                                                    marginTop: 24,
                                                }}
                                            />
                                            <div className="line_green"></div>
                                            <Table
                                                columns={newColumns}
                                                dataSource={data}
                                                pagination={false}
                                                style={{
                                                    marginTop: 24,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateBoard;
