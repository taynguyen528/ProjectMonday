import "../assets/styles/inviteMember.css";
import imgLogo from "../assets/img/logoMonday.png";
import imgInvite from "../assets/img/invite_member.png";
import { useState } from "react";
import React from "react";
function InviteMember() {
    const [formCount, setFormCount] = useState(1);

    const handleAddAnotherClick = () => {
        setFormCount(formCount + 1);
    };

    const renderForms = () => {
        let forms = [];
        for (let i = 0; i < formCount; i++) {
            forms.push(
                <form className="infoMember" key={i}>
                    <input
                        type="email"
                        id={`email-${i}`}
                        name={`email-${i}`}
                        placeholder="Add email here"
                        required
                    ></input>
                    <select id={`role-${i}`} name={`role-${i}`}>
                        <option value="admin" title="">
                            Admin (Can invite & manage new users)
                        </option>
                        <option value="member">
                            Member (Can add and edit content)
                        </option>
                    </select>
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
                                <select id="role" name="role">
                                    <option value="admin" title="">
                                        Admin (Can invite & manage new users)
                                    </option>
                                    <option value="member">
                                        Member (Can add and edit content)
                                    </option>
                                </select>
                            </form>
                            {/* <form className="infoMember">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Add email here"
                                    required
                                ></input>
                                <select id="role" name="role">
                                    <option value="admin">
                                        Admin (Can invite & manage new users)
                                    </option>
                                    <option value="member">
                                        Member (Can add and edit content)
                                    </option>
                                </select>
                            </form> */}
                            {renderForms()}
                        </div>
                        <button
                            className="addAnother"
                            onClick={handleAddAnotherClick}
                        >
                            +<span>Add another</span>
                        </button>

                        <div className="btn-act">
                            <button className="remindMeLater">
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
