import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

export default function AuthContextProvider(props) {

  const [loginData, setLoginData] = useState(null);

  const saveLoginData = () => {
    const encodedToken = localStorage.getItem("accessToken");
    const decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);

    setLoginData(decodedToken);    
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      saveLoginData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ saveLoginData, loginData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
