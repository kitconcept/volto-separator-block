import React from 'react';
import cx from 'classnames';
import { MaybeWrap } from '@plone/volto/components';

const LegacyWrapper = ({ className, children }) => (
  <div className={cx('block separator', className)}>{children}</div>
);

const SeparatorView = ({ data, isEditMode, className, blocksConfig }) => {
  const isBlockModelv3 = blocksConfig?.separator?.blockModel === 3;
  return (
    <MaybeWrap
      condition={!isBlockModelv3}
      as={LegacyWrapper}
      className={className}
    >
      <div className="line" />
    </MaybeWrap>
  );
};

export default SeparatorView;
