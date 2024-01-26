// routes.js
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import CreateAccount from "../pages/CreateAccount";
import Question from "../pages/Question";
import LastQuestion from "../pages/LastQuestion";
import InviteMember from "../pages/InviteMember";
import CreateBoard from "../pages/CreateBoard";
import AddColumnBoard from "../pages/AddColumnBoard";
import Question2 from "../pages/Question2";
import Question3 from "../pages/Question3";
import SelectItemManage from "../pages/SelectItemManage";
import DisplayModeBoard from "../pages/DisplayModeBoard";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/createaccount" element={<CreateAccount />} />
    <Route path="/question" element={<Question />} />
    <Route path="/question2" element={<Question2 />} />
    <Route path="/question3" element={<Question3 />} />
    <Route path="/lastquestion" element={<LastQuestion />} />
    <Route path="/invitemember" element={<InviteMember />} />
    <Route path="/createboard" element={<CreateBoard />} />
    <Route path="/addcolumnboard" element={<AddColumnBoard />} />
    <Route path="/selectitemmanage" element={<SelectItemManage />} />
    <Route path="/displaymodeboard" element={<DisplayModeBoard />} />
  </Routes>
);

export default AppRoutes;
