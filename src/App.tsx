import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import MyList from "./screens/myList/MyList";
import Series from "./screens/series/Series";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/series" Component={Series} />
                    <Route path="/myList" Component={MyList} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
