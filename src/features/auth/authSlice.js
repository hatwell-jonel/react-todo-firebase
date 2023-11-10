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

export const loginWithEmailAndPassword = createAsyncThunk( 'authentication/loginWithemailAndPassword',
     async ({ email, password }, thunkAPI) => {
      try {
        return await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        throw error;
      }
    }
);

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}


export const logout = async () => {
   await signOut(auth);
}
  
  
const authSlice = createSlice({ 
    name: "authentication",
    initialState,
    reducers: {
      authenticatedUser: (state, action) => {
        state.user = action.payload;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(createUser.fulfilled, async (state, action) => {
            state.user = action.payload;
            state.error = null; 
            // logout the created account, so the will not redirect to the mainpage. instead go to login page.
            logout(); 
          })
          .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = null;
          })
      },
});

// Actions
export const { authenticatedUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;