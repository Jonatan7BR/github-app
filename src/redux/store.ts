import { configureStore } from "@reduxjs/toolkit";
import gitHubRepoSlice from "./reducers/gitHubRepoSlice";
import themeSlice from "./reducers/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        gitHubRepo: gitHubRepoSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
