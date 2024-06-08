import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  separatorBlock: {
    id: 'Separator Block',
    defaultMessage: 'Separator',
  },
  shortline: {
    id: 'Short line',
    defaultMessage: 'Short line',
  },
});

export const SeparatorSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.separatorBlock),
    block: 'separator',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
      },
    ],
    properties: {},
    required: [],
  };
};

export const SeparatorStyleEnhancer = ({ schema, intl }) => {
  addStyling({ schema, intl });

  schema.properties.styles.schema.fieldsets[0].fields = [
    'shortLine',
    ...schema.properties.styles.schema.fieldsets[0].fields,
  ];
  schema.properties.styles.schema.properties.shortLine = {
    title: intl.formatMessage(messages.shortline),
    type: 'boolean',
  };

  return schema;
};
