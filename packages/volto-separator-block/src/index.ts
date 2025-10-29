import blockConfig from './components';
import type { ConfigType } from '@plone/registry';
import type { BlockConfigBase } from '@plone/types/src/config/Blocks';

import './theme/separator-base.css';

declare module '@plone/types' {
  export interface BlocksConfigData {
    separator: BlockConfigBase;
  }
}

const applyConfig = (config: ConfigType) => {
  config.blocks.blocksConfig.separator = blockConfig;

  return config;
};

export default applyConfig;
