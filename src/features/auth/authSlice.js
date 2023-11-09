import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    FacebookAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    deleteUser
} from 'firebase/auth';
import {auth} from "../../firebase";

const initialState = {
    user: null,
    error: null,
}

// Create an async thunk for user creation
export const createUser = createAsyncThunk( 'authentication/createUser',
    async ({ email, password, username }, thunkAPI) => {
      try {
        // Your asynchronous logic here
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: username });
        return userCredential;
      } catch (error) {
        throw error;
      }
    }
);

export const loginWithemailAndPassword = createAsyncThunk( 'authentication/login',
     ({ email, password }, thunkAPI) => {
      try {
        return signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        throw error;
      }
    }
);
  
  
const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setUser: (state, action) => {
          console.log(action.payload);
            state.user = action.payload;
        },
        // createUser: async (state, {payload}) => {
        //     state.isLoading = false;
        //     const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);

        //     // Set the username in the user's profile or store it in the database
        //     await updateProfile(userCredential.user, { displayName: payload.username });

        //     console.log(userCredential);
        //     return userCredential;
        // }
    },
    extraReducers: (builder) => {
        builder
          .addCase(createUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = null; // Clear any previous error
          })
          .addCase(loginWithemailAndPassword.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
          })
      },
});



// Actions
export const { setUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;