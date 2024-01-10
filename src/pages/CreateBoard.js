import imgLogo from "../assets/img/logoMonday.png";
import "../assets/styles/CreateBoard.css";
import { React, useState } from "react";

function CreateBoard() {
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
                        <div className="btn__next">
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
                                            <div className="tableWrap">
                                                <div
                                                    className="colTable"
                                                    style={{
                                                        gridTemplateColumns:
                                                            "170px minmax(auto, 200px) minmax(auto, 200px) minmax(auto, 200px) auto",
                                                    }}
                                                >
                                                    <div
                                                        className="colSubTable col-mb-table u7y_F undefined col-start"
                                                        style={{
                                                            gridColumn: "1",
                                                        }}
                                                    >
                                                        <div
                                                            className="col-height MY8RW Gu2z9"
                                                            style={{
                                                                background:
                                                                    "rgb(87, 155, 252)",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            padding: "0px 24px",
                                                            borderLeft:
                                                                "6px solid rgb(87, 155, 252)",
                                                            gridColumn: "1",
                                                            borderRadius:
                                                                "8px 0px 0px",
                                                        }}
                                                    >
                                                        <div className="col-height MY8RW col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "2",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "3",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "4",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            gridColumn: "5",
                                                        }}
                                                    >
                                                        <div className="col-plus">
                                                            <svg
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                width="16"
                                                                height="16"
                                                                aria-hidden="true"
                                                                className="icon_f5f5ef7fbd"
                                                                data-testid="icon"
                                                                style={{
                                                                    color: "#676878",
                                                                }}
                                                            >
                                                                <path
                                                                    d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z"
                                                                    fill="currentColor"
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </div>

                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            padding: "0px 24px",
                                                            borderLeft:
                                                                "6px solid rgb(87, 155, 252)",
                                                            gridColumn: "1",
                                                        }}
                                                    >
                                                        <div className="col-height MY8RW col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "2",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "3",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "4",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            padding: "0px 24px",
                                                            borderLeft:
                                                                "6px solid rgb(87, 155, 252)",
                                                            gridColumn: "1",
                                                        }}
                                                    >
                                                        <div className="col-height MY8RW col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "2",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "3",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "4",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            padding: "0px 24px",
                                                            borderLeft:
                                                                "6px solid rgb(87, 155, 252)",
                                                            gridColumn: "1",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height MY8RW col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "2",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "3",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "4",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "5",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            padding: "0px 24px",
                                                            borderLeft:
                                                                "6px solid rgb(87, 155, 252)",
                                                            color: "#676879",
                                                            gridColumn: "1",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                            borderRadius:
                                                                "0px 0px 0px 8px",
                                                        }}
                                                    >
                                                        <div className="col-height MY8RW col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "2",
                                                            borderLeft: "unset",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "3",
                                                            borderLeft: "unset",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "4",
                                                            borderLeft: "unset",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "5",
                                                            borderLeft: "unset",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-mb-table col-start"
                                                        style={{
                                                            gridColumn: "1",
                                                        }}
                                                    >
                                                        <div
                                                            className="col-height MY8RW Gu2z9"
                                                            style={{
                                                                background:
                                                                    "rgb(0, 200, 117)",
                                                            }}
                                                        ></div>
                                                    </div>

                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            padding: "0px 24px",
                                                            borderLeft:
                                                                "6px solid rgb(0, 200, 117)",
                                                            gridColumn: "1",
                                                            borderRadius:
                                                                "8px 0px 0px",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height MY8RW col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "2",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>

                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "3",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "4",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-height col-width col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            gridColumn: "5",
                                                            borderBottom:
                                                                "1px solid",
                                                        }}
                                                    >
                                                        <div className="col-plus">
                                                            <svg
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                width="16"
                                                                height="16"
                                                                aria-hidden="true"
                                                                className="icon_f5f5ef7fbd"
                                                                data-testid="icon"
                                                                style={{
                                                                    color: "#676878",
                                                                }}
                                                            >
                                                                <path
                                                                    d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z"
                                                                    fill="currentColor"
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-start"
                                                        style={{
                                                            padding: "0px 24px",
                                                            borderLeft:
                                                                "6px solid rgb(0, 200, 117)",
                                                            color: "var(--placeholder-color)",
                                                            gridColumn: "1",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                            borderRadius:
                                                                "0px 0px 0px 8px",
                                                        }}
                                                    >
                                                        <div className="col-height MY8RW col-height-2"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "2",
                                                            borderLeft: "unset",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "3",
                                                            borderLeft: "unset",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "4",
                                                            borderLeft: "unset",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                    <div
                                                        className="colSubTable col-separate col-center"
                                                        style={{
                                                            gridColumn: "5",
                                                            borderLeft: "unset",
                                                            borderTop: "0px",
                                                            borderBottom:
                                                                "1px solid",
                                                            opacity: "0.5",
                                                        }}
                                                    >
                                                        <div className="col-height col-width"></div>
                                                    </div>
                                                </div>
                                            </div>
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
