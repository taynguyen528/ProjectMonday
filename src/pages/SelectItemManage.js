import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Table } from "antd";
import InputComponent from "../components/InputComponent";
import ButtonContinue from "../components/ButtonContinue";
import ButtonBack from "../components/ButtonBack";
import imgLogo from "../assets/img/logoMonday.png";
import "../assets/styles/SelectItemManage.css";

function SelectItemManage() {
  const { state: boardState } = useLocation();
  const boardName = boardState?.state?.boardName;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/AddColumnBoard");
  };

  const handleContinue = () => {
    navigate("/DisplayModeBoard");
  };

  const { activeColumns } = boardState || {};
  const [customInputValue, setCustomInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("Projects");
  const [customColumnName, setCustomColumnName] = useState("");

  const updateSelectedOption = useCallback(
    (value) => {
      setSelectedOption(value);
      localStorage.setItem("selectedOption", value);

      // Nếu là Custom, cập nhật giá trị của tên cột custom
      if (value === "Custom") {
        setCustomColumnName(customInputValue);
      } else {
        // Nếu là option khác, sử dụng giá trị mặc định
        setCustomColumnName("");
      }
    },
    [setSelectedOption, customInputValue]
  );
  const handleCustomInputChange = (e) => {
    const inputValue = e.target.value;
    setCustomInputValue(inputValue);

    if (selectedOption === "Custom") {
      setCustomColumnName(inputValue);
    }
  };

  const data = [
    {
      key: "1",
      owner: <span className="avatar"></span>,
      status: (
        <span className="status_wrap working-on-it nowrap">Working on it</span>
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

  useEffect(() => {
    const storedOption = localStorage.getItem("selectedOption");
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);

  useEffect(() => {
    const columns =
      activeColumns?.map((column) => ({ ...column, hidden: false })) || [];

    const columnsWithCustomColumn = [
      {
        title: selectedOption === "Custom" ? customColumnName : selectedOption,
        dataIndex: selectedOption.toLowerCase(),
        key: selectedOption.toLowerCase(),
        align: "center",
        render: (text, record) => (
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "20px",
              whiteSpace: "nowrap",
            }}
          >
            {record[selectedOption.toLowerCase()]}
          </span>
        ),
      },
      ...columns.map((column) => ({
        ...column,
        align: "center",
        render: (text) => (
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "20px",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </span>
        ),
      })),
    ];
    setColumnsWithCustomColumn(columnsWithCustomColumn);
  }, [selectedOption, activeColumns, customColumnName]);

  const [columnsWithCustomColumn, setColumnsWithCustomColumn] = useState([]);

  const dataWithCustomColumn = data.map((item, index) => {
    let additionalColumnValue;

    if (selectedOption === "Custom") {
      additionalColumnValue = `${customColumnName} ${index + 1}`;
    } else if (selectedOption === "Projects") {
      additionalColumnValue = `Project ${index + 1}`;
    } else if (selectedOption === "Tasks") {
      additionalColumnValue = `Task ${index + 1}`;
    }

    return {
      ...item,
      [selectedOption.toLowerCase()]: additionalColumnValue,
    };
  });

  return (
    <>
      <div className="selectItemManagePage">
        <div className="selectItemManageContent">
          <img src={imgLogo} alt="Logo" />
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
                  defaultChecked={selectedOption === "Projects"}
                  onChange={() => updateSelectedOption("Projects")}
                />
                <InputComponent
                  type="radio"
                  name="selectItemManage"
                  id="Tasks"
                  value="Tasks"
                  label="Tasks"
                  checked={selectedOption === "Tasks"}
                  onChange={() => updateSelectedOption("Tasks")}
                />
                <div className="wrapInputCustom">
                  <input
                    type="radio"
                    name="selectItemManage"
                    id="Custom"
                    value="Custom"
                    checked={selectedOption === "Custom"}
                    onChange={() => updateSelectedOption("Custom")}
                  />
                  <label htmlFor="Custom">
                    <input
                      type="text"
                      name="selectItemManage"
                      id="Custom"
                      placeholder="Custom"
                      className="inputCustom"
                      onChange={handleCustomInputChange}
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="explain" style={{ display: "inline-block" }}>
            "Items" are rows in your board which hold all the relevant
            information to your tasks, projects, campaigns and more.
          </div>
          <div className="group_action">
            <ButtonBack onClick={handleBack} />
            <ButtonContinue onClick={handleContinue} />
          </div>
        </div>
        <div className="overlayCreateBoard">
          <div className="overlay">
            <div className="overlayWrap">
              <button>
                <i className="fa-solid fa-xmark" />
              </button>
              <div className="board">
                <div className="wrapBoard">
                  <div className="new-line-main">{boardName}</div>
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
                        emptyText: () => (
                          <span style={{ display: "none" }}></span>
                        ),
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
