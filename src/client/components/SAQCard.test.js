import React from "react";
import { shallow } from "enzyme";
import SAQCard from "./SAQCard";

describe("SAQCard component", () => {
    test("renders", () => {
        const wrapper = shallow(<SAQCard />);
        wrapper
        .find('a')
        .simulate('keydown');
        expect(wrapper.exists()).toBe(true);
    });
});