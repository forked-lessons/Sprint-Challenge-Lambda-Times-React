import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const TabStyle = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  const selected = "tab";
  return (
    <TabStyle
      // HOW DO YOU STYLE .active-tab???
      className={`tab ${props.selected ? "active-tab" : ""}`}
      onClick={
        () => props.selectedTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
      }
    >
      {props.tab.toUpperCase()}
    </TabStyle>
  );
};
Tab.propTypes = {
  tab: propTypes.string,
  selectedTab: propTypes.string,
  selectTabHandler: propTypes.function
};
// Make sure you include PropTypes on your props.

export default Tab;
