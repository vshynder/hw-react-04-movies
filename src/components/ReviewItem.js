import React from "react";

const ReviewItem = ({ name, quote }) => {
  return (
    <li className="review-list__item">
      <div className="review-list__name">{name}</div>
      <div className="review-list__content">{quote}</div>
    </li>
  );
};

export default ReviewItem;
