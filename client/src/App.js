// import "./App.css";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Order from "./pages/order/Order"
import Order1 from './pages/order/Order1'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Sign_up from "./pages/signup/sign_up";
import Dashboard from "./pages/order/dashboard";
function App() {
  const { currentUser,currentToken } = useContext(AuthContext)
  // const token = currentUser.stsTokenManager.accessToken
  // console.log(token)
  const RequireAuth = ({ children }) => {//if there is a current user logged in to the website it will unprotect all the routes or if there is no user logged in it will protect all routes 
    console.log(currentToken)
    return currentUser&&currentToken ? (children) : <Navigate to='/login' />//children here refers to child of RequiredAuth component i.e whichever homepage component u want to route to
  }
  return (
  <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
          <Route path='/' >
            <Route path='login' element={<Login />}></Route>
            <Route path='signup' element={<Sign_up/>}></Route>
            <Route path='home' element={<RequireAuth><Home /></RequireAuth>}></Route>
            <Route path="order1" element={<Order />}></Route>
            <Route path='order' element=
            {<RequireAuth><Order1/></RequireAuth>}></Route>
          </Route>
          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
