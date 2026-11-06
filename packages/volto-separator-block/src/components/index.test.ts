import { describe, it, expect, vi } from 'vitest';
import blockConfig from './index';

// SVG icons are imported by Vite at build time, not by the test runner.
vi.mock('@plone/volto/icons/divide-horizontal.svg', () => ({
  default: 'divide-horizontal.svg',
}));

describe('separator block configuration', () => {
  it('registers the data adapter that stores the settings', () => {
    const onChangeBlock = vi.fn();
    const data = { '@type': 'separator' };

    blockConfig.dataAdapter!({
      block: 'block-1',
      data,
      id: 'styles',
      onChangeBlock,
      value: { shortLine: true },
    });

    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      ...data,
      styles: { shortLine: true },
    });
  });

  it('registers the block schema the endpoint resolves', () => {
    expect(typeof blockConfig.blockSchema).toBe('function');
  });
});
