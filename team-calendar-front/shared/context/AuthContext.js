import React, {createContext, useContext, useEffect, useState,} from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = window.sessionStorage.getItem("token");
    const storedUser = window.sessionStorage.getItem("user");

    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (token) {
      window.sessionStorage.setItem("token", JSON.stringify(token));
    } else {
      window.sessionStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      window.sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      window.sessionStorage.removeItem("user");
    }
  }, [user]);

  const logout = () => {
    console.log("logout");
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("user");
  };

  const contextValue = {
    token,
    setToken,
    logout,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
