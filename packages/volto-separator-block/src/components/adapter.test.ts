import { describe, it, expect, vi } from 'vitest';
import { SeparatorDataAdapter } from './adapter';

describe('SeparatorDataAdapter', () => {
  it('calls onChangeBlock with the changed field merged into the data', () => {
    const onChangeBlock = vi.fn();
    const data = {
      '@type': 'separator',
      styles: { blockWidth: 'default', shortLine: false },
    };

    SeparatorDataAdapter({
      block: 'block-1',
      data,
      id: 'styles',
      onChangeBlock,
      value: { blockWidth: 'narrow', shortLine: true },
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      ...data,
      styles: { blockWidth: 'narrow', shortLine: true },
    });
  });
});
