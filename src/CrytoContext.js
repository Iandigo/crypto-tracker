import React, { useContext, useEffect, useState } from "react";

import { createContext } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("AUD");
  const [icon, setIcon] = useState("$AUD");

  useEffect(() => {
    if (currency === "AUD") setIcon("$AUD");
    else if (currency === "USD") setIcon("$USD");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, icon, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
