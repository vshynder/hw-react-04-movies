import React from "react";

import PropTypes from "prop-types";

const ReviewItem = ({ name, quote }) => {
  return (
    <li className="review-list__item">
      <div className="review-list__name">{name}</div>
      <div className="review-list__content">{quote}</div>
    </li>
  );
};

ReviewItem.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
};

export default ReviewItem;
