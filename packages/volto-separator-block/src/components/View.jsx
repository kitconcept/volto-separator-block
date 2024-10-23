import React from 'react';
import cx from 'classnames';
import { MaybeWrap } from '@plone/volto/components';

const LegacyWrapper = (props) => (
  <div className={cx('block separator', props.className)} style={props.style}>{children}</div>
);

const SeparatorView = (props) => {
  const { blocksConfig } = props;
  const isBlockModelv3 = blocksConfig?.separator?.blockModel === 3;
  return (
    <MaybeWrap
      condition={!isBlockModelv3}
      as={LegacyWrapper}
      {...props}
    >
      <div className="line testclass" />
    </MaybeWrap>
  );
};

export default SeparatorView;
