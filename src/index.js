import { defineMessages } from 'react-intl';
import { SeparatorStyleEnhancer } from './components/schema';
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
    schemaEnhancer: SeparatorStyleEnhancer,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    enableStyling: false,
  };

  return config;
};
