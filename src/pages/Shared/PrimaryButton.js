import React from 'react';

const PrimaryButton = ({title}) => {
  return (
    <button className="btn btn-primary p-3 uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">{title}</button>
  );
};

export default PrimaryButton;