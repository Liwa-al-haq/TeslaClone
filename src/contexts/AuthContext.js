import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  currentToken:(localStorage.getItem("token")) || null
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
      localStorage.setItem("user",JSON.stringify(state.currentUser))
  }, [state.currentUser])
      localStorage.setItem("token",(state.currentToken),[state.currentToken])
  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser,currentToken:state.currentToken, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
