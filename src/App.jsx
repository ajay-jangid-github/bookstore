import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import CoursesPage from "./Courses/CoursesPage";
//import { ThemeProvider } from "./components/Theme";
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path= "/login" element = {<Login />} />
          <Route path="/signup" element = {<Signup />}/>
         
        </Routes>


  );
}


export default App;
