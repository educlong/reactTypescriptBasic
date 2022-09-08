/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/naming-convention */
import { PropTypes } from '@material-ui/core';
import { createContext, ReactNode, useState } from 'react';

const themeDefault = {
  // xem dataType của theme tại Navbar (nơi nào gọi theme thì xem tại đó - color (# CT) tại NavBar.tsx)
  theme: 'primary' as PropTypes.Color,
  // xem dataType của toggleTheme tại nơi khai báo 'const toggleTheme = ...' ( # TGT)
  toggleTheme: (): void => {},
};

//{ theme: PropTypes.Color; toggleTheme: (theme: PropTypes.Color) => void; }
//    ==> interface for themeDefault
export const ThemeContext = createContext<{
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}>(themeDefault);

//-------------- IMPORTANT -------------------
//{ children: ReactNode } ==> interface for props
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  //useState
  const [theme, setTheme] = useState<PropTypes.Color>(themeDefault.theme);
  //change state
  const toggleTheme = (themes: PropTypes.Color) => setTheme(themes); //# TGT

  return (
    //send state (theme) and event (toggleTheme) into value (ThemeContext.Provider)
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
