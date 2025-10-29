import cx from 'classnames';
import type { BlockViewProps } from '@plone/types';

const SeparatorView = (props: BlockViewProps) => {
  const { className, style } = props;
  return (
    <div className={cx('block separator', className)} style={style}>
      <div className="line" />
    </div>
  );
};

export default SeparatorView;
