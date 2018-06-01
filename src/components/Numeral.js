import React from 'react';
import PropTypes from 'prop-types';

import numeral from 'numeral';

class Numeral extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.registerFormatter();
  }

  // Register our formatter.
  registerFormatter() {
    if (!numeral['formats']['mm']) {
      numeral.register('format', 'mm', {
        regexps: {
          format: /(mm)/,
          unformat: /(mm)/
        },
        format: function(value, format, roundingFunction) {
          const convertedFormat = format.replace(/mm/, 'am');
          return numeral._.numberToFormat(value, convertedFormat, roundingFunction) + 'm';
        },
        unformat: function(string) {
          return numeral._.stringToNumber(string.slice(0, -2) + 'am');
        }
      });
    }
  }

  render() {
    const {
      value,
      format,
    } = this.props;

    return (
      <React.Fragment>
        { numeral(value).format(format) }
      </React.Fragment>
    );
  }
}

Numeral.propTypes = {
  value: PropTypes.number,
  format: PropTypes.string,
};

export default Numeral;
