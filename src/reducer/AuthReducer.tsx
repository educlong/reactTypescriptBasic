/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
export enum AuthActionType {
  TOGGLE_AUTH = 'TOGGLE_AUTH',
}
export const authReducer = (
  state: { isAuthenticated: boolean; username: string },
  action: { type: AuthActionType; payload: string }
) => {
  switch (action.type) {
    case AuthActionType.TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        username: action.payload,
      };
    default:
      return state;
  }
};
