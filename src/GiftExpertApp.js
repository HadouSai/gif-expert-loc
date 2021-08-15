import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";
import GiffGrid from "./components/GiffGrid";

/**
 *
 * @param {*} initialCategories `[]`
 * @returns
 */
const GiftExpertApp = ({ initialCategories }) => {
  //const category = ['Morgana', 'Gwen', 'Seraphine'];
  const [categories, setCategories] = useState(initialCategories);
  //const newCategory = 'randomNyx';

  return (
    <div>
      <h2>GiftExpertApp</h2>

      <AddCategory setCategories={setCategories} />
      <hr />

      <div>
        {categories.map((category, i) => (
          <GiffGrid key={i} category={category} />
        ))}
      </div>
    </div>
  );
};

GiftExpertApp.propTypes = {
  initialCategories: PropTypes.array,
};
GiftExpertApp.defaultProps = {
  initialCategories: ["Hatsune"],
};

export default GiftExpertApp;
