import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
}) => {
  if (Array.isArray(items)) {
    items = items.reduce((t, v, i) => {
      t[i] = v;
      return t;
    }, {});
  }

  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={
            "list-group-item" + (selectedItem === items[item] ? " active" : "")
          }
          onClick={() =>
            onItemSelect({
              prop: valueProperty,
              value: items[item][valueProperty],
            })
          }
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

export default GroupList;

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};
