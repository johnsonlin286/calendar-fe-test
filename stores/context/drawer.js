import { createContext, useState } from "react";

export const DrawerContext = createContext({
  visible: Boolean,
  setDrawer: () => {},
  hideDrawer: () => {},
});

const DrawerContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const setDrawer = () => setVisible(true);

  const hideDrawer = () => setVisible(false);

  const value = {
    visible,
    setDrawer,
    hideDrawer,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
