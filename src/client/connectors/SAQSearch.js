import { connect } from "react-redux";
import SAQSearch from "components/SAQSearch";

export default connect(
    ({ list, criteria: { allCriteria } }) => ({ productList: list, allCriteria })
)(SAQSearch);