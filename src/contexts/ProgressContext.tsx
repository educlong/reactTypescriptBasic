/* eslint-disable @typescript-eslint/naming-convention */
import { createContext, ReactNode } from 'react';

const progressDefault = {
  lastTime: 'May 07, 2022',
  status: 'In Progress',
};
//{ lastTime: string; status: string; } ==> interface for progressDefault
export const ProgressContext = createContext<{
  lastTime: string;
  status: string;
}>(progressDefault);

//-------------- IMPORTANT -------------------
//{ children: ReactNode } ==> interface for props
const ProgressContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};
export default ProgressContextProvider;
