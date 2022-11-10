
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Introduction from "./components/Introduction/Introduction";
import Services from "./components/Services/Services";

import React, { useContext } from "react";
import { easeQuadInOut } from 'd3-ease';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ProgressCircle from "./components/AnimatedProgressProvider/ProgressCircle";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import MoreWorks from "./components/MoreWorks/MoreWorks";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import{themeContext} from './ModeContext'
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>

function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black' :'',
      color: darkMode? 'white' : ''
    }}>
      <Navbar/>
      <Introduction></Introduction>
      <Services></Services>
      <Experience/>
      {/* <Works/>
     <MoreWorks/> */}
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
