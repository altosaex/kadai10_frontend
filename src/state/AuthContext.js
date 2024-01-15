import { Children, createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態の定義
const initialState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
  // user: null, //ログインしてないですね。
  // user: {
  //   _id: "6592c5e00477106d5a9f2d45",
  //   username: "altosaex",
  //   email: "sae.coach@gmail.com",
  //   password: "Y6jxkVHT9",
  //   profilePicture: "/person/1.jpg",
  //   coverPicture: "",
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  // },
  isFetching: false, //ログインしようともしてないですね。
  error: false, //エラーも吐いてないですね。
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  //ユーザー入力によって状態(state)が更新され、それをグローバルに利用している。
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //set user data in localstroge
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};