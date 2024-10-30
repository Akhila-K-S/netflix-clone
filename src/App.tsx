import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import MyList from "./screens/myList/MyList";
import Series from "./screens/series/Series";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* This will render Home by default */}
                <Route path="/home" element={<Home />} />
                <Route path="/series" element={<Series />} />
                <Route path="/myList" element={<MyList />} />
                {/* Optional: redirect root to /home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
