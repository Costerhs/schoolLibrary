import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./component/header/Header";
import Home from "./component/Home/Home";
import ClassPage from "./component/ClassPage/ClassPage";
import SubjectPage from "./component/SubjectPage/SubjectPage";
import About from "./component/About/About";

import { books, subjectColors } from "./data/booksData.js";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/class/:classNum" 
          element={<ClassPage books={books} subjectColors={subjectColors}/>} 
        />
        <Route 
          path="/class/:classNum/:subject" 
          element={<SubjectPage subjectColors={subjectColors} books={books} />} 
        />
      </Routes>
    </Router>
  );
}