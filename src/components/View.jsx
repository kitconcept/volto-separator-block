import React from 'react';

import cx from 'classnames';

const SeparatorView = (props) => {
  const { className, data } = props;
  return (
    <div className={cx('block separator', className)}>
      <div className="line" />
    </div>
  );
};

export default SeparatorView;
