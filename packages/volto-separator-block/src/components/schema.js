import { defineMessages } from 'react-intl';

const messages = defineMessages({
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
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.separatorBlock),
    block: 'separator',
    fieldsets: [{ id: 'default', title: 'Default', fields: ['shortLine'] }],
    properties: {
      shortLine: {
        title: intl.formatMessage(messages.shortline),
        type: 'boolean',
      },
    },
    required: [],
  };
};
