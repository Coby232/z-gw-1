import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  language: "English",
  username: "",
  gender: "",
  age: 0,
  email: "",
  logout: false,
  profileImage: null,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setLogout: (state, action) => {
      state.logout = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  setLanguage,
  setUsername,
  setGender,
  setAge,
  setEmail,
  setLogout,
  setProfileImage,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;
