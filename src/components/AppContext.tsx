"use client";
import React, { createContext, ReactNode } from "react";

export const appContext = createContext<{
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}>({
  path: "",
  setPath: () => {},
});
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = React.useState("");

  return (
    <appContext.Provider value={{ path, setPath }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
