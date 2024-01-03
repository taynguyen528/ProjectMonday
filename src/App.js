import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Question from "./pages/Question";
import LastQuestion from "./pages/LastQuestion";
import InviteMember from "./pages/InviteMember";


function App() {
    return (
        <>
            <InviteMember></InviteMember>
            <Routes></Routes>
        </>
    );
}

export default App;
