import React from 'react';
import { useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components';
import { SeparatorSchema } from './schema';

const SeparatorData = (props) => {
  const { block, data, onChangeBlock } = props;
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
    />
  );
};

export default SeparatorData;
