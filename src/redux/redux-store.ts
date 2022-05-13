import { createStore, combineReducers, applyMiddleware, Action } from "redux";
import thunkMiddleWare, { ThunkAction } from "redux-thunk";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navbar: navbarReducer,
    usersPage: usersReducer, 
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type AppStateType = ReturnType<typeof store.getState>;

export type InferActionsTypes<T> = T extends {[key: string] : (...args: any[]) => infer U} ? U : "never";

export type ThunkActionType<A extends Action, R=void> = ThunkAction<Promise<R>, AppStateType, unknown, A>;

export default store;
