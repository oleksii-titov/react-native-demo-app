import {createSlice} from '@reduxjs/toolkit';

type State = {
  firstName: string;
  lastName: string;
  birthdayDate: string;
  email: string;
  phone: string;
};

export const initialState: State = {
  firstName: '',
  lastName: '',
  birthdayDate: '',
  email: '',
  phone: '',
};

export const userSlice: any = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setFirstName: (state: State, action) => {
      state.firstName = action.payload.firstName;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload.lastName;
    },
    setBirthdayDate: (state, action) => {
      state.birthdayDate = action.payload.birthdayDate;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
    reset: (state, action) => {
      const {firstName, lastName, birthdayDate, email, phone} = action.payload;
      return {
        firstName: firstName,
        lastName: lastName,
        birthdayDate: birthdayDate,
        email: email,
        phone: phone,
      };
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setBirthdayDate,
  setPhone,
  setEmail,
  reset,
} = userSlice.actions;

export default userSlice.reducer;
