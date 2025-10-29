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
  BlockWidth: {
    id: 'Block Width',
    defaultMessage: 'Block Width',
  },
  Alignment: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
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
        fields: [],
      },
    ],
    properties: {},
    required: [],
  };
};

export const SeparatorStyleEnhancer = ({ schema, formData, intl }) => {
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

  schema.properties.styles.schema.fieldsets[0].fields = [
    'blockWidth:noprefix',
    ...schema.properties.styles.schema.fieldsets[0].fields,
  ];

  schema.properties.styles.schema.properties['blockWidth:noprefix'] = {
    widget: 'blockWidth',
    title: intl.formatMessage(messages.BlockWidth),
    default: 'default',
    filterActions: ['narrow', 'default'],
  };

  schema.properties.styles.schema.fieldsets[0].fields = [
    'align:noprefix',
    ...schema.properties.styles.schema.fieldsets[0].fields,
  ];

  schema.properties.styles.schema.properties['align:noprefix'] = {
    widget: 'blockAlignment',
    title: intl.formatMessage(messages.Alignment),
    default: 'left',
  };

  schema.properties.styles.schema.fieldsets[0].fields = [
    'shortLine',
    ...schema.properties.styles.schema.fieldsets[0].fields,
  ];

  schema.properties.styles.schema.properties.shortLine = {
    title: intl.formatMessage(messages.shortline),
    type: 'boolean',
  };

  schema.properties.styles.schema.properties['align:noprefix'].disabled =
    !formData?.styles?.shortLine;

  return schema;
};
