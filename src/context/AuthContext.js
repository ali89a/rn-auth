import React, { createContext } from "react";
import axios from "axios";
import {BASE_URL} from '../config';


export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const register = (name, email, password) => {
    axios.post(`${BASE_URL}/register`, {
      name,
      email,
      password,
    })
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(`Register Api Error ${e}`);

      });
  };
  const login = (email, password) => {
    axios
      .post(`${BASE_URL}/login`, {
        email,
        password
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);

      })
      .catch(e => {
        console.log(`login Api error ${e}`);

      });
  };
  return (
    <AuthContext.Provider
      value={{
        register,login
      }}>
      {children}
    </AuthContext.Provider>
  );
};
