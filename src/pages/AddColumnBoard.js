import imgLogo from "../assets/img/logoMonday.png";
import "../assets/styles/addColumnBoard.css";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonContinue from "../components/ButtonContinue";
import ButtonBack from "../components/ButtonBack";

import { useState, useEffect } from "react";
import { Table } from "antd";

function AddColumnBoard() {
    const { state } = useLocation();
    const boardName = state && state.boardName;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/CreateBoard");
    };
    const handleNext = () => {
        const activeColumns = columns.filter(
            (column) => buttonStates[column.title]
        );
        navigate("/SelectItemManage", {
            state: { activeColumns, checkedList, boardName },
        });
    };

    function getContentForButton(buttonName) {
        switch (buttonName) {
            case "Owner":
                return "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.";
            case "Status":
                return "Stay up-to-date on the progress and performance of all your tasks so you can optimize quickly.";
            case "DueDate":
                return "Visualize deadlines, with your team so nothing falls through the cracks.";
            case "TimeLine":
                return "Visualize how long you and your team have to complete an item or project so everyone is aligned on start and due dates.";
            case "LastUpdate":
                return "Easily see in one glance when and by who your work was last updated.";
            case "File":
                return "Instantly add your files to your board. Edit, comment, and tag any file to keep your team in the loop.";
            case "Notes":
                return "Jot down all your important notes to keep your work in context and up-to-date.";
            case "Priority":
                return "Keep track of your progress by focusing on what matters so you can reach your milestones.";
            case "Budget":
                return "Set a budget to easily track all spending and expenses as your project progresses.";
            default:
                return "";
        }
    }

    const customNoDataMessage = () => <span style={{ display: "none" }}></span>;
    const [buttonStates, setButtonStates] = useState({
        Owner: true,
        Status: true,
        DueDate: true,
        TimeLine: false,
        Priority: false,
        File: false,
        Budget: false,
        Notes: false,
        LastUpdate: false,
    });

    const handleButtonClick = (buttonName) => {
        const activeButtons = Object.keys(buttonStates).filter(
            (btn) => buttonStates[btn]
        );

        if (activeButtons.length === 1 && buttonStates[buttonName]) {
            return;
        }

        const newButtonStates = {
            ...buttonStates,
            [buttonName]: !buttonStates[buttonName],
        };

        setButtonStates(newButtonStates);

        const content = getContentForButton(buttonName);
        const explainElement = document.querySelector(".explain");

        if (newButtonStates[buttonName]) {
            explainElement.textContent = content;
            explainElement.style.display = "block";
        } else {
            const nearestActiveButton = activeButtons
                .reverse()
                .find((btn) => newButtonStates[btn]);
            const activeContent = getContentForButton(nearestActiveButton);

            explainElement.textContent = activeContent;
            explainElement.style.display = "block";
        }

        const isButtonActive = activeButtons.includes(buttonName);
        if (isButtonActive && activeButtons.length === 1) {
            return;
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columns = [
        {
            title: "Project",
            dataIndex: "manager",
            key: "1",
            align: "center",
        },
        {
            title: "Owner",
            dataIndex: "owner",
            key: "2",
            align: "center",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "3",
            align: "center",
        },
        {
            title: "DueDate",
            dataIndex: "dueDate",
            key: "4",
            align: "center",
        },
        {
            title: "TimeLine",
            dataIndex: "timeLine",
            key: "5",
            align: "center",
        },
        {
            title: "Priority",
            dataIndex: "priority",
            key: "6",
            align: "center",
        },
        {
            title: "File",
            dataIndex: "file",
            key: "7",
            align: "center",
        },
        {
            title: "Budget",
            dataIndex: "budget",
            key: "8",
            align: "center",
        },
        {
            title: "Notes",
            dataIndex: "notes",
            key: "9",
            align: "center",
        },
        {
            title: "LastUpdate",
            dataIndex: "lastUpdate",
            key: "10",
            align: "center",
        },
    ];

    const data = [
        {
            key: "1",
            manager: <span className="line sub"></span>,
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
            manager: <span className="line sub"></span>,
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
            manager: <span className="line sub"></span>,
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
    // const defaultCheckedList = columns.map((item) => item.key);
    const defaultCheckedList = [...columns.map((item) => item.key), "ABC"];
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const options = columns.map(({ key, title }) => ({
        label: title,
        value: key,
    }));

    const newColumns = columns.map((item) => ({
        ...item,
        hidden: item.key !== "ABC" && !checkedList.includes(item.key),
    }));

    useEffect(() => {
        const updatedColumns = columns.map((item) => ({
            ...item,
            hidden: !buttonStates[item.title],
        }));
        setCheckedList(
            updatedColumns
                .filter((item) => !item.hidden)
                .map((item) => item.key)
        );
    }, [buttonStates, columns]);

    return (
        <>
            <div className="addColumnBoardPage">
                <div className="addColumnContent">
                    <div className="addColumnWrap">
                        <img src={imgLogo}></img>
                        <div className="addColumnTitle">
                            <h1>
                                Let's select the relevant columns for your board
                            </h1>
                            <h2>
                                Choose from the most popular column types for
                                your work
                            </h2>
                        </div>
                        <div className="groupButton">
                            <button
                                className={`ownerButton ${
                                    buttonStates.Owner ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("Owner")}
                            >
                                <div
                                    className="wrapSVG"
                                    style={{
                                        backgroundColor: "rgb(102, 204, 255)",
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="#fff"
                                        width="16"
                                        height="16"
                                        aria-hidden="true"
                                        class="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                                        data-testid="icon"
                                    >
                                        <path
                                            d="M10.2501 2.0498C9.74254 2.0498 9.2399 2.14979 8.77093 2.34404 8.30196 2.53829 7.87584 2.82302 7.51691 3.18195 7.15798 3.54088 6.87325 3.967 6.679 4.43597 6.48475 4.90494 6.38477 5.40758 6.38477 5.91519 6.38477 6.4228 6.48475 6.92544 6.679 7.39441 6.87325 7.86338 7.15798 8.28949 7.51691 8.64843 7.87584 9.00736 8.30196 9.29209 8.77093 9.48634 9.2399 9.68059 9.74254 9.78057 10.2501 9.78057 10.7578 9.78057 11.2604 9.68059 11.7294 9.48634 12.1983 9.29208 12.6245 9.00736 12.9834 8.64843 13.3423 8.28949 13.627 7.86338 13.8213 7.39441 14.0156 6.92544 14.1155 6.4228 14.1155 5.91519 14.1155 5.40758 14.0156 4.90494 13.8213 4.43597 13.627 3.967 13.3423 3.54088 12.9834 3.18195 12.6245 2.82302 12.1983 2.53829 11.7294 2.34404 11.2604 2.14979 10.7578 2.0498 10.2501 2.0498zM9.34496 3.72986C9.63194 3.61099 9.93952 3.5498 10.2501 3.5498 10.5608 3.5498 10.8684 3.61099 11.1553 3.72986 11.4423 3.84873 11.7031 4.02296 11.9227 4.24261 12.1424 4.46226 12.3166 4.72301 12.4355 5.01 12.5544 5.29698 12.6155 5.60456 12.6155 5.91519 12.6155 6.22582 12.5544 6.5334 12.4355 6.82038 12.3166 7.10736 12.1424 7.36812 11.9227 7.58777 11.7031 7.80742 11.4423 7.98165 11.1553 8.10052 10.8684 8.21939 10.5608 8.28057 10.2501 8.28057 9.93952 8.28057 9.63194 8.21939 9.34496 8.10052 9.05798 7.98165 8.79722 7.80742 8.57757 7.58777 8.35792 7.36812 8.18369 7.10736 8.06482 6.82038 7.94595 6.5334 7.88477 6.22582 7.88477 5.91519 7.88477 5.60456 7.94595 5.29698 8.06482 5.01 8.18369 4.72301 8.35792 4.46226 8.57757 4.24261 8.79722 4.02296 9.05797 3.84873 9.34496 3.72986zM9.83935 10.7312C9.8512 10.7307 9.86306 10.7305 9.87491 10.7305H10.6247C10.6384 10.7305 10.652 10.7308 10.6655 10.7314 11.7943 10.7771 12.8913 11.0775 13.8525 11.6041 14.8151 12.1314 15.6096 12.8682 16.1604 13.7443 16.7113 14.6203 17.0003 15.6068 17 16.6097V17.2981C17 17.6856 16.6456 17.9997 16.2084 17.9997H10.6251L10.6201 17.9997H4.29163C3.85443 17.9997 3.5 17.6856 3.5 17.2981V16.6097C3.4997 15.6068 3.7887 14.6203 4.33955 13.7443 4.89044 12.8682 5.68491 12.1314 6.64751 11.6041 7.6101 11.0767 8.70884 10.7762 9.83935 10.7312zM9.89335 12.1337H10.6063C11.4613 12.1703 12.2918 12.3987 13.02 12.7977 13.753 13.1992 14.358 13.7602 14.7774 14.4274 15.1946 15.0907 15.4145 15.8372 15.4167 16.5965H10.6296L10.6247 16.5965H5.08328C5.08548 15.8372 5.30542 15.0907 5.72255 14.4273 6.14204 13.7602 6.747 13.1992 7.47999 12.7977 8.20811 12.3988 9.03853 12.1703 9.89335 12.1337zM5.08326 16.6066L5.08328 16.5965C5.08327 16.5998 5.08327 16.6032 5.08326 16.6066zM15.4167 16.6066C15.4167 16.6032 15.4167 16.5999 15.4167 16.5965L15.4167 16.6066z"
                                            fill="#fff"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Owner</span>
                            </button>
                            <button
                                className={`statusButton ${
                                    buttonStates.Status ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("Status")}
                            >
                                <div
                                    className="wrapSVG"
                                    style={{
                                        backgroundColor: "rgb(0, 200, 117)",
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="#fff"
                                        width="16"
                                        height="16"
                                        aria-hidden="true"
                                        class="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                                        data-testid="icon"
                                    >
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M1.99805 2.77233C1.99805 2.34471 2.34471 1.99805 2.77233 1.99805H17.2257C17.6533 1.99805 18 2.34471 18 2.77233V7.58989V12.4079V17.2257C18 17.6533 17.6533 18 17.2257 18H2.77233C2.34471 18 1.99805 17.6533 1.99805 17.2257V12.4079V7.58989V2.77233ZM3.54662 13.1822V16.4514H16.4514V13.1822H3.54662ZM16.4514 11.6336H3.54662V8.36417H16.4514V11.6336ZM16.4514 3.54662V6.8156H3.54662V3.54662H16.4514Z"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <path
                                                    transform="translate(2 2)"
                                                    d="M0 0H16V16H0z"
                                                ></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span>Status</span>
                            </button>
                            <button
                                className={`dueDateButton ${
                                    buttonStates.DueDate ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("DueDate")}
                            >
                                <div
                                    className="wrapSVG"
                                    style={{
                                        backgroundColor: "rgb(156, 211, 38)",
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="#fff"
                                        width="16"
                                        height="16"
                                        aria-hidden="true"
                                        class="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                                        data-testid="icon"
                                    >
                                        <path
                                            d="M6.83801 3C6.83801 2.58579 6.50223 2.25 6.08801 2.25C5.6738 2.25 5.33801 2.58579 5.33801 3V5.15381V7.30769C5.33801 7.72191 5.6738 8.05769 6.08801 8.05769C6.50223 8.05769 6.83801 7.72191 6.83801 7.30769V5.90381H11.4726C11.8868 5.90381 12.2226 5.56802 12.2226 5.15381C12.2226 4.73959 11.8868 4.40381 11.4726 4.40381H6.83801V3ZM2.64227 4.9389C2.98489 4.59629 3.44957 4.40381 3.9341 4.40381C4.34831 4.40381 4.6841 4.73959 4.6841 5.15381C4.6841 5.56802 4.34831 5.90381 3.9341 5.90381C3.8474 5.90381 3.76424 5.93825 3.70293 5.99956C3.64162 6.06087 3.60718 6.14403 3.60718 6.23073V8.71149H16.1072V6.23073C16.1072 6.14403 16.0727 6.06087 16.0114 5.99956C15.9501 5.93825 15.867 5.90381 15.7803 5.90381H14.3765V7.30769C14.3765 7.72191 14.0407 8.05769 13.6265 8.05769C13.2123 8.05769 12.8765 7.72191 12.8765 7.30769V5.16301L12.8764 5.15381L12.8765 5.1446V3C12.8765 2.58579 13.2123 2.25 13.6265 2.25C14.0407 2.25 14.3765 2.58579 14.3765 3V4.40381H15.7803C16.2648 4.40381 16.7295 4.59629 17.0721 4.9389C17.4147 5.28152 17.6072 5.7462 17.6072 6.23073V9.46149V15.923C17.6072 16.4076 17.4147 16.8723 17.0721 17.2149C16.7295 17.5575 16.2648 17.75 15.7803 17.75H3.9341C3.44957 17.75 2.98489 17.5575 2.64227 17.2149C2.29966 16.8723 2.10718 16.4076 2.10718 15.923V9.46149V6.23073C2.10718 5.7462 2.29966 5.28152 2.64227 4.9389ZM3.60718 15.923V10.2115H16.1072V15.923C16.1072 16.0097 16.0727 16.0929 16.0114 16.1542C15.9501 16.2155 15.867 16.25 15.7803 16.25H3.9341C3.8474 16.25 3.76424 16.2155 3.70293 16.1542C3.64162 16.0929 3.60718 16.0097 3.60718 15.923Z"
                                            fill="#fff"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Due date</span>
                            </button>
                            <button
                                className={`timeLineButton ${
                                    buttonStates.TimeLine ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("TimeLine")}
                            >
                                <div
                                    className="wrapSVG"
                                    style={{
                                        backgroundColor: "rgb(162, 93, 220)",
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="#fff"
                                        width="16"
                                        height="16"
                                        aria-hidden="true"
                                        class="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                                        data-testid="icon"
                                    >
                                        <path
                                            d="M13 5H4.67871M16.3205 10.2148H8.49902M10.5 15.4287H5"
                                            stroke="#fff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Timeline</span>
                            </button>
                            <button
                                className={`priorityButton ${
                                    buttonStates.Priority ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("Priority")}
                            >
                                <img
                                    src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/wizard/priority-icon.svg"
                                    alt="Priority"
                                ></img>
                                <span>Priority</span>
                            </button>
                            <button
                                className={`fileButton ${
                                    buttonStates.File ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("File")}
                            >
                                <img
                                    src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/wizard/files-icon.svg"
                                    alt="File"
                                ></img>
                                <span>File</span>
                            </button>
                            <button
                                className={`budgetButton ${
                                    buttonStates.Budget ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("Budget")}
                            >
                                <div
                                    className="wrapSVG"
                                    style={{
                                        backgroundColor: "rgb(255, 203, 0)",
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="#fff"
                                        width="16"
                                        height="16"
                                        aria-hidden="true"
                                        class="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                                        data-testid="icon"
                                    >
                                        <g fill="#fff" clipPath="url(#clip0)">
                                            <path d="M4.86947 8.59888H3.56146V3.55694L2 4.04122V2.97761L4.72917 2H4.86947V8.59888zM11.7107 13.3678H7.19375V12.4717L9.32549 10.1997C9.61817 9.87983 9.83391 9.60072 9.97271 9.36236 10.1145 9.12399 10.1854 8.89769 10.1854 8.68346 10.1854 8.39078 10.1115 8.16146 9.96365 7.99551 9.81581 7.82654 9.60459 7.74205 9.33002 7.74205 9.03432 7.74205 8.80048 7.84464 8.62849 8.04982 8.45952 8.25198 8.37503 8.51901 8.37503 8.85092H7.0625C7.0625 8.44962 7.15755 8.08301 7.34764 7.75111 7.54075 7.4192 7.8123 7.15971 8.16231 6.97264 8.51232 6.78255 8.9091 6.6875 9.35265 6.6875 10.0315 6.6875 10.5581 6.85044 10.9322 7.17631 11.3094 7.50218 11.498 7.96232 11.498 8.55673 11.498 8.8826 11.4135 9.21451 11.2445 9.55245 11.0755 9.89039 10.7859 10.2841 10.3755 10.7337L8.87742 12.3133H11.7107V13.3678zM14.9265 14.0561H15.6235C15.9555 14.0561 16.2014 13.9731 16.3613 13.8072 16.5212 13.6412 16.6012 13.421 16.6012 13.1464 16.6012 12.8809 16.5212 12.6742 16.3613 12.5263 16.2044 12.3785 15.9871 12.3046 15.7095 12.3046 15.4591 12.3046 15.2494 12.374 15.0804 12.5127 14.9115 12.6485 14.827 12.8266 14.827 13.0468H13.519C13.519 12.7028 13.611 12.3951 13.7951 12.1235 13.9821 11.8489 14.2416 11.6347 14.5735 11.4808 14.9084 11.3269 15.2766 11.25 15.6779 11.25 16.3749 11.25 16.921 11.4175 17.3163 11.7524 17.7115 12.0843 17.9092 12.5429 17.9092 13.1283 17.9092 13.43 17.8171 13.7076 17.6331 13.9611 17.449 14.2145 17.2076 14.4091 16.9089 14.5449 17.2801 14.6777 17.5561 14.8768 17.7372 15.1423 17.9212 15.4079 18.0133 15.7217 18.0133 16.0837 18.0133 16.6691 17.799 17.1383 17.3706 17.4913 16.9451 17.8444 16.3809 18.0209 15.6779 18.0209 15.0201 18.0209 14.4815 17.8474 14.0621 17.5004 13.6457 17.1534 13.4375 16.6948 13.4375 16.1245H14.7455C14.7455 16.3719 14.8375 16.5741 15.0216 16.731 15.2087 16.8879 15.438 16.9663 15.7095 16.9663 16.0203 16.9663 16.2632 16.8848 16.4382 16.7219 16.6162 16.556 16.7053 16.3372 16.7053 16.0656 16.7053 15.4079 16.3432 15.079 15.619 15.079H14.9265V14.0561z"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <path
                                                    transform="translate(2 2)"
                                                    d="M0 0H16V16H0z"
                                                ></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span>Budget</span>
                            </button>
                            <button
                                className={`notesButton ${
                                    buttonStates.Notes ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("Notes")}
                            >
                                <div
                                    className="wrapSVG"
                                    style={{
                                        backgroundColor: "rgb(87, 155, 252)",
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="#fff"
                                        width="16"
                                        height="16"
                                        aria-hidden="true"
                                        class="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                                        data-testid="icon"
                                    >
                                        <path
                                            d="M4.75 5C4.75 4.86193 4.86193 4.75 5 4.75H9.24961V15.2498H7.5C7.08579 15.2498 6.75 15.5856 6.75 15.9998C6.75 16.414 7.08579 16.7498 7.5 16.7498H9.98232L9.99961 16.75L10.0169 16.7498H12.5C12.9142 16.7498 13.25 16.414 13.25 15.9998C13.25 15.5856 12.9142 15.2498 12.5 15.2498H10.7496V4.75H15C15.1381 4.75 15.25 4.86193 15.25 5V6C15.25 6.41421 15.5858 6.75 16 6.75C16.4142 6.75 16.75 6.41421 16.75 6V5C16.75 4.0335 15.9665 3.25 15 3.25H5C4.0335 3.25 3.25 4.0335 3.25 5V6C3.25 6.41421 3.58579 6.75 4 6.75C4.41421 6.75 4.75 6.41421 4.75 6V5Z"
                                            fill="#fff"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Notes</span>
                            </button>

                            <button
                                className={`lastUpdatedButton ${
                                    buttonStates.LastUpdate ? "active" : ""
                                }`}
                                onClick={() => handleButtonClick("LastUpdate")}
                            >
                                <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/wizard/last-updated-icon.svg"></img>
                                <span>Last updated</span>
                            </button>
                        </div>

                        <div className="explain"></div>
                        <div className="groupBtnAct">
                            <ButtonBack onClick={handleBack}></ButtonBack>
                            <ButtonContinue
                                onClick={handleNext}
                            ></ButtonContinue>
                        </div>
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
                                            columns={newColumns}
                                            dataSource={data}
                                            pagination={false}
                                            bordered={true}
                                            style={{
                                                marginTop: 24,
                                            }}
                                        />
                                        <div className="line_green"></div>

                                        <Table
                                            className="custom-table"
                                            columns={newColumns}
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

export default AddColumnBoard;
