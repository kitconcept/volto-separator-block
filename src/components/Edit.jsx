import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Data from './Data';

const SeparatorEdit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  return (
    <>
      <div />
      <SidebarPortal selected={selected}>
        <Data
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default SeparatorEdit;
