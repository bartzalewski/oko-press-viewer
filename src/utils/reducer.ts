import { PER_PAGE, TYPES } from "./constants";

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case TYPES.start:
      return { ...state, loading: true };
    case TYPES.loaded:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === PER_PAGE,
        after: state.after + action.newData.length,
      };
    default:
      throw new Error("Don't understand action");
  }
};
