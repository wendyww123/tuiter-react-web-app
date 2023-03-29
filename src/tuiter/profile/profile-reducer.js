import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        name: 'Jose Annunziato', handle: '@jannunzi',
        profilePicture: 'jose.jpeg', bannerPicture: 'polyglot.jpeg',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
        location: 'Boston, MA', dateOfBirth: '1968-07-07', dateJoined: '2009-04-02',
        followingCount: 340, followersCount: 223, total_tuits: 6114,
    },
    reducers: {
        updateProfile(state, action) {
            Object.assign(state, action.payload);
        }
    }
})

export const {
    updateProfile
} = profileSlice.actions;

export default profileSlice.reducer;