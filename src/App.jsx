import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import CoursesPage from "./Courses/CoursesPage";
//import { ThemeProvider } from "./components/Theme";
import Signup from './components/Signup';
import Log from './components/Log';



function App() {
  return (
    <div>
     
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/signup" element = {<Signup />}/>
           <Route path= "/log" element = {<Log/>}/>
        </Routes>
    


    </div>
        

  );
}


export default App;
