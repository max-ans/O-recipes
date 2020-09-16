export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SEND_LOGIN_FORM = 'SEND_LOGIN_FORM';
export const CONNECT_USER = 'CONNECT_USER';
export const SEND_DISCONNECT_REQUEST = 'SEND_DISCONNECT_REQUEST';
export const DISCONNECT_USER = 'DISCONNECT_USER';

// actions creator
export const updateInputValue = (value, name) => ({
  type: UPDATE_INPUT_VALUE,
  name,
  value,
});

export const sendLoginForm = () => ({
  type: SEND_LOGIN_FORM,
});

export const connectUser = (user) => ({
  type: CONNECT_USER,
  user,
});

export const sendDisconnectRequest = () => ({
  type: SEND_DISCONNECT_REQUEST,
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});
