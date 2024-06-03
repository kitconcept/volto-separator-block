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
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
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
    ...schema.properties.styles.schema.fieldsets[0].fields,
    'align',
  ];
  schema.properties.styles.schema.properties.align = {
    widget: 'align',
    title: intl.formatMessage(messages.align),
    actions: ['full', 'center', 'left'],
    default: 'full',
  };

  return schema;
};
