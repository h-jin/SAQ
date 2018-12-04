import defaultState from "store/defaultStates"

export default (state = defaultState, action) => {
    switch (action.type) {
        case "FETCH_ALL_PRODUCTS":          
            const { allProducts, allCriteria } = action.payload;
            return { ...state, criteria: { allCriteria }, list: allProducts };
        case "FETCH_PRODUCTS":          
        return { ...state, list: action.payload };
        case "UPDATE_CRITERIA":
            const { criteria } = state;
            const { criteriaObj } = criteria;
            const newCriteria= {...criteriaObj, ...action.payload };
            return { ...state, criteria:{ ...criteria, criteriaObj: newCriteria }};
        default:
            return state;
    }
};