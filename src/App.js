// import ReactDOM from 'react-dom';
import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    
    <div className="App">
            <Navbar />
            <Header/>
            <Main />
            <Projects />
            <Contact />
            <Footer />        
    </div>
  );
}

export default App;
