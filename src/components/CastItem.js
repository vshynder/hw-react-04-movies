import React from "react";

import PropTypes from "prop-types";

const CastItem = ({ profileImage, name }) => {
  return (
    <li className="cast-list__item">
      <img className="cast-list__image" src={profileImage} alt="cast member" />
      <p className="cast-list__name">{name}</p>
    </li>
  );
};

CastItem.propTypes = {
  profileImage: PropTypes.string,
  name: PropTypes.string,
};

export default CastItem;
