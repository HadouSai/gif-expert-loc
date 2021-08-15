import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {*} img
 * @returns
 */
const GiffGridItem = ({ id, title, imgUrl }) => {
  return (
    <li className="card" key={id}>
      <span>{title}</span>

      <img src={imgUrl} alt={title} />
    </li>
  );
};

GiffGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default GiffGridItem;
