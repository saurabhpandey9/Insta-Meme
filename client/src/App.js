import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";
import { useEffect, createContext, useReducer, useContext } from 'react';

import { initialState, reducer } from './components/reducer/UserReducer';
export const userContext = createContext();

const Routing = () => {
  const history = useHistory();
  const {state,dispatch} =useContext(userContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({type:"USER",payload:user})
    }else{
      history.push('/login')
    }
  
  },[])

  return (
    <Switch>
      <Route exact path='/'><Home /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/signup'><Signup /></Route>
      <Route path='/profile'><Profile /></Route>
      <Route path='/createpost'><CreatePost /></Route>
    </Switch>
  );

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </userContext.Provider>

  );
}

export default App;
