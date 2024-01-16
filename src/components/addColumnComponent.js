import React, { useState } from "react";

const addColumnComponent = () => {
    const [activeButtons, setActiveButtons] = useState([
        "Button1",
        "Button2",
        "Button3",
    ]);

    const handleButtonClick = (buttonName) => {
        const updatedButtons = [...activeButtons];

        if (updatedButtons.includes(buttonName)) {
            const index = updatedButtons.indexOf(buttonName);
            updatedButtons.splice(index, 1);
        } else {
            updatedButtons.push(buttonName);
        }

        setActiveButtons(updatedButtons);
    };

    const renderButtonsForRow2 = () => {
        return ["Button1", "Button2", "Button3", "Button4"].map(
            (buttonName, index) => (
                <button
                    key={buttonName}
                    onClick={() => handleButtonClick(buttonName)}
                    style={{
                        gridColumn: `${index + 2}`, // Đặt nút vào cột tương ứng (bắt đầu từ cột 2)
                        background: activeButtons.includes(buttonName)
                            ? "green"
                            : "red",
                    }}
                >
                    {buttonName}
                </button>
            )
        );
    };

    const renderTable = () => (
        <>
            <div className="row">
                {/* Cột 1 */}
                <div
                    className="colSubTable col-mb-table u7y_F undefined col-start"
                    style={{ gridColumn: "1" }}
                >
                    <div
                        className="col-height MY8RW Gu2z9"
                        style={{ background: "rgb(87, 155, 252)" }}
                    ></div>
                </div>
                {/* Các divs của hàng 1 */}
                {renderDivsForRow1()}
                {/* Cột cuối cùng */}
                <div
                    className="colSubTable col-separate col-start"
                    style={{ gridColumn: "5" }}
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
                            style={{ color: "#676878" }}
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
            </div>

            {/* Hàng 2 */}
            <div className="row">
                {/* Cột đầu tiên */}
                <div
                    className="colSubTable col-separate col-center"
                    style={{ gridColumn: "1" }}
                ></div>
                {/* Buttons */}
                {renderButtonsForRow2()}
                {/* Cột cuối cùng */}
                <div className="colSubTable col-separate col-center"></div>
            </div>
        </>
    );

    //...

    return <>{renderTable()}</>;
};

export default addColumnComponent;
