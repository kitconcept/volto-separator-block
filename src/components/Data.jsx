import React from 'react';
import { useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components';
import { SeparatorSchema } from './schema';

const SeparatorData = (props) => {
  const {
    data,
    block,
    onChangeBlock,
    schemaEnhancer,
    navRoot,
    contentType,
  } = props;
  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(SeparatorSchema({ ...props, intl }), props)
    : SeparatorSchema({ ...props, intl });

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
      onChangeBlock={onChangeBlock}
      formData={data}
      fieldIndex={data.index}
      block={block}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default SeparatorData;
