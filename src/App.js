import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Question from "./pages/Question";
import LastQuestion from "./pages/LastQuestion";
function App() {
    return (
        <>
            <LastQuestion></LastQuestion>
            <Routes></Routes>
        </>
    );
}

export default App;
