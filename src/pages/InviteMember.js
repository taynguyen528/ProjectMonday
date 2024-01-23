import "../assets/styles/inviteMember.css";
import imgLogo from "../assets/img/logoMonday.png";
import imgInvite from "../assets/img/invite_member.png";
import { React, useState } from "react";
import { Select, Space } from "antd";
import { useNavigate } from "react-router-dom";

function InviteMember() {
    const navigate = useNavigate();

    const handelButtonRemindMeLater = () => {
        navigate("/CreateBoard");
    };
    const [formCount, setFormCount] = useState(1);

    const handleAddAnotherClick = () => {
        setFormCount(formCount + 1);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const { Option } = Select;

    const CustomSelect = ({ defaultValue, options, onChange }) => {
        const handleChange = (value, option) => {
            console.log(value);
            if (onChange) {
                onChange(value);
            }
        };

        return (
            <Select
                defaultValue={defaultValue}
                style={{
                    width: 200,
                    height: "56px",
                }}
                onChange={handleChange}
                labelInValue
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        <div>{option.value}</div>
                        <div
                            style={{
                                fontSize: "14px",
                                color: "#999",
                                display: "block",
                            }}
                        >
                            {option.label}
                        </div>
                    </Option>
                ))}
            </Select>
        );
    };

    const options = [
        {
            value: "Admin",
            label: "Can invite & manage new users",
        },
        {
            value: "Member",
            label: "Can add and edit content",
        },
    ];

    const renderForms = () => {
        let forms = [];
        for (let i = 0; i < formCount; i++) {
            forms.push(
                <form className="infoMember" key={`form-${i}`}>
                    <input
                        type="email"
                        id={`email-${i}`}
                        name={`email-${i}`}
                        placeholder="Add email here"
                        required
                    ></input>
                    <Space wrap>
                        <CustomSelect
                            defaultValue="ADMIN"
                            options={options}
                            onChange={(value) => handleChange(value)}
                        />
                    </Space>
                </form>
            );
        }
        return forms;
    };
    return (
        <>
            <div className="inviteMemberPage">
                <div className="inviteMemberWrap">
                    <div className="inviteMemberContent">
                        <img src={imgLogo}></img>
                        <div className="inviteTitle">
                            <h1>Invite your teammates</h1>
                            <h2>
                                Collaborate with your team to get the most out
                                of monday.com
                            </h2>
                        </div>
                        <div className="formContainer">
                            <form className="infoMember">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Add email here"
                                    required
                                ></input>
                                <Space wrap>
                                    <CustomSelect
                                        defaultValue="ADMIN"
                                        options={[
                                            {
                                                value: "Admin",
                                                label: "Admin (Can invite & manage new users)",
                                            },
                                            {
                                                value: "Member",
                                                label: "Member (Can add and edit content)",
                                            },
                                        ]}
                                        onChange={handleChange}
                                    />
                                </Space>
                            </form>

                            {renderForms()}
                        </div>
                        <button
                            className="addAnother"
                            onClick={handleAddAnotherClick}
                        >
                            +<span>Add another</span>
                        </button>

                        <div className="btn-act">
                            <button
                                className="remindMeLater"
                                onClick={handelButtonRemindMeLater}
                            >
                                Remind me later
                            </button>
                            <button className="inviteYourTeam">
                                Invite your team
                            </button>
                        </div>
                    </div>
                    <div className="inviteMemberImg">
                        <img src={imgInvite} alt="imgInvite"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InviteMember;
