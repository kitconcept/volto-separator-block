import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import SeparatorView from './components/View';
import SeparatorEdit from './components/Edit';
import './theme/main.less';

export default (config) => {
  config.blocks.blocksConfig.separator = {
    id: 'separator',
    title: 'Seperator',
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
