import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Home from "./screens/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Home />
    </div>
  );
};

export default App;
