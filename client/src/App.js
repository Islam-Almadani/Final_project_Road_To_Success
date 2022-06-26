import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Majors from './pages/Majors';
import Details from './pages/Details';
import Courses from './FiveDetails/Courses';
import Map from './FiveDetails/Map';
import Requirements from './FiveDetails/Requirements';
import Cooking from './FiveDetails/Cooking';
import SomeoneToHelp from './FiveDetails/SomeOneToHelp';
import Teacher from './FiveDetails/Teacher';
import Qualification from './Profile_Buttons/Qualification';
import Signed from './Profile_Buttons/Signed';
import Contact from './Profile_Buttons/Contact';
import Tutorial from './FiveDetails/Tutorial';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [data, setdata] = useState('')
  const signedData = (u) => {
    setdata([...data, u])
    console.log(data);
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/majors/:name" element={<Majors/>}></Route>
        <Route path="/details" element={<Details sign={signedData}/>}></Route>
        <Route path="/details/map" element={<Map/>}></Route>
        <Route path="/details/cooking" element={<Cooking/>}></Route>
        <Route path="/details/courses" element={<Courses/>}></Route>
        <Route path="/details/someonetohelp" element={<SomeoneToHelp/>}></Route>
        <Route path="/details/requirements" element={<Requirements/>}></Route>
        <Route path="/details/someonetohelp/teacher" element={<Teacher/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/profile/signed" element={<Signed name={data}/>}></Route>
        <Route path="/profile/qualification" element={<Qualification/>}></Route>
        <Route path="/cooking/:name" element={<Tutorial/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
