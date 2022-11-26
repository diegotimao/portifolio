import React, { useState, useMemo } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [theme, setTheme] = useState('lithe')


  const context = useMemo(() => ({
    theme,
    setTheme,
  }), [
    theme,
    setTheme,
  ])

  return (
    <AuthContext.Provider value={ context }>
      { props.children }
    </AuthContext.Provider>
  )
}