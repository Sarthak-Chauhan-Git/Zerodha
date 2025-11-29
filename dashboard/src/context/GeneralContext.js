import React, { createContext, useState } from "react";

export const GeneralContext = createContext(null);

export const GeneralContextProvider = ({ children }) => {
  // add any global state you need here
  const [watchlist, setWatchlist] = useState([]);
  const [user, setUser] = useState({ id: "USERID" });

  const value = {
    watchlist,
    setWatchlist,
    user,
    setUser,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};
