import { defineMessages } from 'react-intl';
import { SeparatorStyleEnhancer } from './schema';
import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import SeparatorView from './View';
import SeparatorEdit from './Edit';
import { SeparatorSchema } from './schema';

import type { BlockConfigBase } from '@plone/types/src/config/Blocks';

defineMessages({
  Separator: {
    id: 'Separator',
    defaultMessage: 'Separator',
  },
});

const blockConfig: BlockConfigBase = {
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
  blockSchema: SeparatorSchema,
};

export default blockConfig;
