import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    phone: '',
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload.lastName;
    },
    setAge: (state, action) => {
      state.age = action.payload.age;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
  },
});

export const {setFirstName, setLastName, setAge, setPhone, setEmail} =
  userSlice.actions;

export default userSlice.reducer;
