import { defineMessages } from 'react-intl';

const messages = defineMessages({
  separatorBlock: {
    id: 'Separator Block',
    defaultMessage: 'Separator Block',
  },
});

export const SeparatorSchema = (props) => ({
  title: props.intl.formatMessage(messages.separatorBlock),
  block: 'separator',
  required: [],
});
