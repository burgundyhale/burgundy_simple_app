import { createStore } from "redux";
import rootReducer from "../reducers";

import { initialState as list } from "../reducers/list";

const initialState = {
  list,
};

const getStore = () => createStore(rootReducer, initialState);

export default getStore;
