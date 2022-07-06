import { createContext, useState, useEffect } from "react";
export const UserContext = createContext({
  display_webcam: {},
  set_display_webcam() {},
});

export const UserContextProvider = ({ children }) => {
  const [display_webcam, set_display_webcam] = useState(true);

  // useEffect(() => {
  //   set_display_webcam(true)
  // }, []);
  const value = {
    display_webcam,
    set_display_webcam
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};