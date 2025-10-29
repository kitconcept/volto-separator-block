import React from 'react';
import { useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { SeparatorSchema } from './schema';
import type { BlockEditProps } from '@plone/types';

const SeparatorData = (props: BlockEditProps) => {
  const {
    block,
    data,
    onChangeBlock,
    blocksConfig,
    navRoot,
    contentType,
    blocksErrors,
  } = props;
  const intl = useIntl();
  const schema = SeparatorSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
      onChangeBlock={onChangeBlock}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
      errors={blocksErrors}
    />
  );
};

export default SeparatorData;
