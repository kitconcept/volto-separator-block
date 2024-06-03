import React from 'react';
import cx from 'classnames';

const SeparatorView = (props) => {
  //eslint-disable-next-line
  const { className, data, style } = props;
  return (
    <div className={cx('block separator', className)} style={style}>
      <div className="line" />
    </div>
  );
};

export default SeparatorView;
