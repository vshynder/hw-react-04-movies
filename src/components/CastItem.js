import React from "react";

const CastItem = ({ profileImage, name }) => {
  return (
    <li className="cast-list__item">
      <img className="cast-list__image" src={profileImage} alt="cast member" />
      <p className="cast-list__name">{name}</p>
    </li>
  );
};

export default CastItem;
