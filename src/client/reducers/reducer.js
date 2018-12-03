import defaultState from "store/defaultStates"

export default (state = defaultState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
        return { ...state, list: action.payload };
        default:
            return state;
    }
};