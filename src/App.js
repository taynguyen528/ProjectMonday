import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Question from "./pages/Question";
import LastQuestion from "./pages/LastQuestion";
import InviteMember from "./pages/InviteMember";
import CreateBoard from "./pages/CreateBoard";
function App() {
    return (
        <>
            <CreateBoard></CreateBoard>
            <Routes></Routes>
        </>
    );
}

export default App;
