import React from "react";
import { mount } from "enzyme";
import SAQSearch from "./SAQSearch";

describe("SAQSearch component", () => {
    test("renders", () => {
        const wrapper = mount(<SAQSearch />);
        expect(wrapper.exists()).toBe(true);
        wrapper.unmount();
    });
});