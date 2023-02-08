export const initialState = {
  userData:{
    displayName: '',
    email: '',
    emailVerified: false,
  }
};


export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'setUserData':
      return {
        ...state,
        userData: action.payload,
      }
    default:
      return state;
  }
};
