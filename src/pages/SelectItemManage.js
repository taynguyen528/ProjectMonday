import imgLogo from "../assets/img/logoMonday.png";
import "../assets/styles/SelectItemManage.css";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonContinue from "../components/ButtonContinue";
import ButtonBack from "../components/ButtonBack";
import InputComponent from "../components/InputComponent";
import { Table } from "antd";
import { useState, useEffect } from "react";

function SelectItemManage() {
    const { state: boardState } = useLocation();
    const { state } = useLocation();
    const boardName = state && state.boardName;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/AddColumnBoard");
    };

    const { activeColumns } = boardState || {};

    const columns = activeColumns.map((column) => ({
        ...column,
        hidden: false,
    }));

    const customNoDataMessage = () => <span style={{ display: "none" }}></span>;

    const [selectedOption, setSelectedOption] = useState("Projects");
    const [customInputValue, setCustomInputValue] = useState("");
    const handleOptionChange = (e) => {
        const selectedValue = e.target?.value || "";
        setSelectedOption(selectedValue);
        setCustomInputValue("");
    };

    const data = [
        {
            key: "1",
            owner: <span className="avatar"></span>,
            status: (
                <span className="status_wrap working-on-it nowrap">
                    Working on it
                </span>
            ),
            dueDate: (
                <span className="wrapDueDate">
                    <span className="danger-level ">
                        <span className="icon">!</span>
                    </span>
                    <span className="deadline not-completed nowrap">2 Jan</span>
                </span>
            ),
            timeLine: (
                <span className="wrapTimeLine">
                    <span className="timeLine not-completed nowrap">
                        <span className="icon">!</span>
                        <span className="deadline">2 - 3 Jan</span>
                    </span>
                </span>
            ),
            priority: <span className="wrapPriority low">Low</span>,
            budget: <span className="wrapBudget">$100</span>,
            file: <span className="wrapSpan"></span>,
            notes: <span className="wrapNote nowrap">Action items</span>,
            lastUpdate: (
                <span className="wrapLastUpdate nowrap">
                    <span className="avatar"></span>
                    <span className="time">2 weeks ago</span>
                </span>
            ),
        },
        {
            key: "2",
            owner: <span className="no_avatar"></span>,
            status: <span className="status_wrap done nowrap">Done</span>,
            dueDate: (
                <span className="wrapDueDate">
                    <span className="no-danger-level">
                        <span
                            className="fa-solid fa-check"
                            style={{ color: "#fff" }}
                        ></span>
                    </span>
                    <span className="deadline completed">3 Jan</span>
                </span>
            ),
            timeLine: (
                <span className="wrapTimeLine">
                    <span className="timeLine completed nowrap">
                        <span
                            className="fa-solid fa-check"
                            style={{ color: "#fff" }}
                        ></span>
                        <span className="deadline">3 - 4 Jan</span>
                    </span>
                </span>
            ),
            priority: <span className="wrapPriority high">High</span>,
            budget: <span className="wrapBudget">$1000</span>,
            file: <span className="wrapSpan"></span>,
            notes: <span className="wrapNote nowrap">Meeting notes</span>,
            lastUpdate: (
                <span className="wrapLastUpdate nowrap">
                    <span className="avatar"></span>
                    <span className="time">2 weeks ago</span>
                </span>
            ),
        },
        {
            key: "3",
            owner: <span className="no_avatar"></span>,
            status: <span className="status_wrap stuck nowrap">Stuck</span>,
            dueDate: (
                <span className="wrapDueDate">
                    <span className="danger-level ">
                        <span className="icon">!</span>
                    </span>
                    <span className="deadline not-completed">4 Jan</span>
                </span>
            ),
            timeLine: (
                <span className="wrapTimeLine">
                    <span className="timeLine not-completed nowrap">
                        <span className="icon">!</span>
                        <span className="deadline">6 - 7 Jan</span>
                    </span>
                </span>
            ),
            priority: <span className="wrapPriority medium">Medium</span>,
            budget: <span className="wrapBudget">$500</span>,
            file: <span className="wrapSpan"></span>,
            notes: <span className="wrapNote nowrap">Other</span>,
            lastUpdate: (
                <span className="wrapLastUpdate nowrap">
                    <span className="avatar"></span>
                    <span className="time">2 weeks ago</span>
                </span>
            ),
        },
    ];
    const dataWithCustomColumn = data.map((item, index) => {
        console.log("Selected Option:", selectedOption);
        let additionalColumnValue;

        if (selectedOption === "Custom") {
            additionalColumnValue = `${customInputValue} ${index + 1}`;
        } else if (selectedOption === "Projects") {
            additionalColumnValue = `Project ${index + 1}`;
        } else if (selectedOption === "Tasks") {
            additionalColumnValue = `Task ${index + 1}`;
        }

        console.log("Additional Column Value:", additionalColumnValue);

        return {
            [selectedOption.toLowerCase()]: additionalColumnValue,
            ...item,
        };
    });

    const columnsWithCustomColumn = [
        {
            title: selectedOption,
            dataIndex: selectedOption.toLowerCase(),
            key: selectedOption.toLowerCase(),
            align: "center",
            render: (text) => (
                <span style={{ display: "block", textAlign: "center" }}>
                    {text}
                </span>
            ),
        },
        ...columns.map((column) => ({
            ...column,
            align: "center",
            render: (text) => (
                <span style={{ display: "block", textAlign: "center" }}>
                    {text}
                </span>
            ),
        })),
    ];

    return (
        <>
            <div className="selectItemManagePage">
                <div className="selectItemManageContent">
                    <img src={imgLogo}></img>
                    <div className="selectItemManageTitle">
                        <h1>Select one of the items you’d like to manage</h1>
                        <div className="wrapOption">
                            <form>
                                <InputComponent
                                    type="radio"
                                    name="selectItemManage"
                                    id="Projects"
                                    value="Projects"
                                    label="Projects"
                                    defaultChecked={true}
                                    onChange={handleOptionChange}
                                />
                                <InputComponent
                                    type="radio"
                                    name="selectItemManage"
                                    id="Tasks"
                                    value="Tasks"
                                    label="Tasks"
                                    onChange={handleOptionChange}
                                />
                                <div className="wrapInputCustom">
                                    <input
                                        type="radio"
                                        name="selectItemManage"
                                        id="Custom"
                                        value="Custom"
                                        onChange={handleOptionChange}
                                    />
                                    <label htmlFor="Custom">
                                        <input
                                            type="text"
                                            name="selectItemManage"
                                            id="Custom"
                                            placeholder="Custom"
                                            className="inputCustom"
                                            onChange={(e) =>
                                                setCustomInputValue(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div
                        className="explain"
                        style={{ display: "inline-block" }}
                    >
                        "Items" are rows in your board which hold all the
                        relevant information to your tasks, projects, campaigns
                        and more.
                    </div>
                    <div className="group_action">
                        <ButtonBack onClick={handleBack}></ButtonBack>
                        <ButtonContinue></ButtonContinue>
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
                                    <div className="new-line-main">
                                        {boardName}
                                    </div>
                                    <div className="table">
                                        <div className="line_blue"></div>
                                        <Table
                                            className="custom-table"
                                            columns={columnsWithCustomColumn}
                                            dataSource={dataWithCustomColumn}
                                            pagination={false}
                                            bordered={true}
                                            style={{
                                                marginTop: 24,
                                            }}
                                        />
                                        <div className="line_green"></div>

                                        <Table
                                            className="custom-table"
                                            columns={columnsWithCustomColumn}
                                            pagination={false}
                                            style={{
                                                marginTop: 24,
                                            }}
                                            locale={{
                                                emptyText: customNoDataMessage,
                                            }}
                                        />
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

export default SelectItemManage;
