import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Question from "./pages/Question";
import LastQuestion from "./pages/LastQuestion";
import InviteMember from "./pages/InviteMember";
import CreateBoard from "./pages/CreateBoard";
import AddColumnBoard from "./pages/AddColumnBoard";
import DemoTable from "./pages/DemoTable";
function App() {
    return (
        <>
            <AddColumnBoard></AddColumnBoard>
            <Routes></Routes>
        </>
    );
}

export default App;
