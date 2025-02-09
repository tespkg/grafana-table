import { handleActions } from "redux-actions";
// import * as Actions from "./actions";
import { StoreType } from "./types/general-state-types";

const initialState: StoreType = {};

export default handleActions<StoreType, any>(
  {
    // [Actions.AnyAction.toString()](state = initialState, { payload }: ReturnType<typeof Actions.AnyAction>) {
    //   const {} = payload;
    //
    //   return state;
    // },
  },
  initialState
);
