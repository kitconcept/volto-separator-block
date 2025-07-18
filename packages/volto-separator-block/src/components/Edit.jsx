import React from 'react';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import Data from './Data';
import View from './View';

const SeparatorEdit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  return (
    <>
      <View {...props} isEditMode />
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
