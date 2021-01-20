import { combineReducers } from "redux";
import NotesReducer from "./NotesReducer";

const CombinedReducers = combineReducers({ NotesReducer });

export default CombinedReducers;
