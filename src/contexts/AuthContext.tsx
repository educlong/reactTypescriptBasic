/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { createContext, ReactNode, useReducer } from 'react';
import { authReducer, AuthActionType } from '../reducer/AuthReducer';

const authDefault = {
  isAuthenticated: false,
  username: '',
};
export const AuthContext = createContext<{
  authInfo: { isAuthenticated: boolean; username: string };
  toggleAuth: (username: string) => void;
}>({
  authInfo: authDefault,
  toggleAuth: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  //useReducer
  // const [
  //        <zá trị đầu tiên mà reducer nó trả lại, state này tên zì cũng đc, this state will export,
  //         zá trị này đc lấy trong reducer ra, tức là zá trị dynamic,
  //         cứ khi nào store thay đổi thì, thì zá trị này sẽ thay đổi theo: authInfo,
  //         trường hợp này chính là: { isAuthenticated: boolean; username: string } trong AuthReducer  >,
  //        dispatch
  //      ]
  //       = useReducer(<reducer muốn sử dụng: authReducer>,
  //                    <zá trị khởi điểm của state mà we truyền vào trong reducer.AutheReducer: authDefault>)
  const [authInfo, dispatch] = useReducer(authReducer, authDefault);
  // toggleAuth sẽ nhận vào 1 username kiểu string
  const toggleAuth = (username: string) =>
    // we sẽ dispatch, tức là set cho username trong AuthReducer 1 cái action này đó để cho username này
    // là username mà người ta sẽ truyền vào khi mà người ta gọi toggleAuth lên,
    // và lật cái isAuthenticated từ F->T
    // dispatch(<truyền vào 1 action có properties là type và payload như đc định nghĩa trong AuthReducer>)
    // payload chính là username toggleAuth nhận vào: const toggleAuth = (username: string)
    dispatch({ type: AuthActionType.TOGGLE_AUTH, payload: username });
  return (
    // <AuthContext.Provider value={{ <authInfo từ: const [authInfo, dispatch] >, toggleAuth }}>
    <AuthContext.Provider value={{ authInfo, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
