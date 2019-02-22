import React from "react";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  const selected = "tab";
  return (
    <div
      className={`tab ${props.selected ? "active-tab" : ""}`}
      onClick={
        () => props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
      }
    >
      {props.tab.toUpperCase()}
    </div>
  );
};
// Tab.propTypes = {
//   tab: propTypes.string,
//   selectedTab: propTypes.string,
//   selectTabHandler: propTypes.function
// };
// Make sure you include PropTypes on your props.

export default Tab;
