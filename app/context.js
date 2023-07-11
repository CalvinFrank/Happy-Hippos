"use client";
import { useState, createContext, useContext } from "react";

const AppContext = createContext();

//this function is for context
export function AppWrapper( {children} ) {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <AppContext.Provider value={{isClicked,setIsClicked}}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext)
}