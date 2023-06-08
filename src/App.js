import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InfiniteScroll from './components/InfiniteScroll';
import Detail from "./components/Detail";
import './App.css';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
        <Routes>
        <Route path="/" element={<InfiniteScroll/>} />
        <Route path="/detail/:itemId" element={<Detail/>} />
        </Routes>
    </Router>
    
  );
}

export default App;
