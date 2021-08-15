import React from "react";
import PropTypes from "prop-types";
import GiffGridItem from "./GiffGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

/**
 *
 * @param {*} category
 * @returns
 */
const GiffGrid = ({ category }) => {
  const { giffs, loading } = useFetchGifs(category);

  return (
    <div>
      <h2>{category}</h2>

      <ol>
        {loading && <p>Loading</p>}

        {giffs.map((giff) => (
          <GiffGridItem
            key={giff.id}
            id={giff.id}
            title={giff.title}
            imgUrl={giff.url}
          />
        ))}
      </ol>
    </div>
  );
};

GiffGrid.propTypes = {
  category: PropTypes.string,
};

export default GiffGrid;
