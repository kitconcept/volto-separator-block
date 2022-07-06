import { defineMessages } from 'react-intl';

import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import SeparatorView from './components/View';
import SeparatorEdit from './components/Edit';
import './theme/main.less';

defineMessages({
  Separator: {
    id: 'Separator',
    defaultMessage: 'Separator',
  },
});

export default (config) => {
  config.blocks.blocksConfig.separator = {
    id: 'separator',
    title: 'Separator',
    icon: divideHorizontalSVG,
    group: 'teasers',
    view: SeparatorView,
    edit: SeparatorEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
    enableStyling: false,
  };

  return config;
};
