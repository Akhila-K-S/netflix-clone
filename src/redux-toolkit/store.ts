import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./reducers/bannerReducer";
import originalsReducer from "./reducers/originalsReducer";
import actionReducer from "./reducers/actionReducer";
import romanticReducer from "./reducers/romanticReducer";
import horrorReducer from "./reducers/horrorReducer";
import videoReducer from "./reducers/videoIDReducer";

const store = configureStore({
  reducer: {
    banner: bannerReducer,
    originals: originalsReducer,
    actions: actionReducer,
    romantics: romanticReducer,
    horrors: horrorReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
