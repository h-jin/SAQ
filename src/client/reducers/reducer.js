import defaultState from "store/defaultStates"

export default (state = defaultState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return { ...state, list: action.payload };
        case "UPDATE_CRITERIA":
            const { criteria: { criteriaObj} } = state;
            const newCriteria= {...criteriaObj, ...action.payload };
            return { ...state, criteria:{ criteriaObj: newCriteria }};
        default:
            return state;
    }
};