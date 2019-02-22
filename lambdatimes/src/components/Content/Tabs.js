import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    .tabs {
      width: 1280px;
    }
`;
const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;
const TabTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;
const Tabs = props => {
  return (
    <TabWrapper>
      <Topics>
        <TabTitle>TRENDING TOPICS:</TabTitle>
        {props.tabs.map(tab => (
          // ASK ABOUT STYLING SOMETHING LIKE THIS WITH STYLED COMPONENTS

          <Tab
            tab={tab}
            selectedTab={props.selected}
            selectedTabHandler={props.selectedTabHandler}
          />
        ))}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </Topics>
    </TabWrapper>
  );
};
// Tabs.propTypes = {
//   tabs: Proptypes.arrayOf(Proptypes.string),
//   selectedTab: Proptypes.string,
//   selectTabHandler: Proptypes.function
// };
// Make sure to use PropTypes to validate your types!
export default Tabs;
