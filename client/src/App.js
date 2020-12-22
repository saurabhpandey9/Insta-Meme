import NavBar from "./components/Navbar";
import { BrowserRouter,Route } from 'react-router-dom';
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Route exact path='/'><Home/></Route>
    <Route path='/login'><Login/></Route>
    <Route path='/signup'><Signup/></Route>
    <Route path='/profile'><Profile/></Route>
    <Route path='/createpost'><CreatePost/></Route>


    </BrowserRouter>
   
  );
}

export default App;
