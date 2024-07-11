import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  currentToken:(localStorage.getItem("token")) || null
};

export const AuthContext = createContext(INITIAL_STATE);
const LOGOUT_USER = "LOGOUT_USER";
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
      localStorage.setItem("user",JSON.stringify(state.currentUser))
  }, [state.currentUser])
      localStorage.setItem("token",(state.currentToken),[state.currentToken])
      const logout = () => {
        dispatch({ type: LOGOUT_USER });
      };
  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser,currentToken:state.currentToken, dispatch,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
