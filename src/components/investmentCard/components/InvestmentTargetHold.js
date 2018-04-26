import React from 'react';
import PropTypes from 'prop-types';

const convertToFormat = (value, format) => {
  if (value === null) {
    return null;
  }

  switch (format) {
    case 'years':
    default:
      return Math.floor(value / 12);
  }
}

const getFormat = (format) => {
  switch (format) {
    case 'years':
    default:
      return 'YR';
  }
}

const InvestmentTargetHold = ({
  min,
  max,
  format
}) => {
  const formattedMin = convertToFormat(min, format);
  const formattedMax = convertToFormat(max, format);
  const formattedFormat = getFormat(format);

  return (
    <React.Fragment>
      {
        formattedMin !== null && formattedMax !== null &&
        `${formattedMin} - ${formattedMax} ${formattedFormat}`
      }
      {
        formattedMin !== null && formattedMax === null &&
        `${formattedMin} ${formattedFormat}`
      }
      {
        formattedMin === null && formattedMax !== null &&
        `${formattedMax} ${formattedFormat}`
      }
    </React.Fragment>
  );
};

InvestmentTargetHold.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  format: PropTypes.oneOf([
    'years',
  ]),
};

InvestmentTargetHold.defaultProps = {
  min: 36,
  max: 60,
  format: 'years',
};

export default InvestmentTargetHold;
