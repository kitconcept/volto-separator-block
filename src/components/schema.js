import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  separatorBlock: {
    id: 'Separator Block',
    defaultMessage: 'Separator Block',
  },
});

export const SeparatorSchema = (props) => ({
  title: props.intl.formatMessage(messages.separatorBlock),
  block: 'separator',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
    },
  ],
  required: [],
});
