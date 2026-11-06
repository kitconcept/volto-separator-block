import type { BlockConfigBase } from '@plone/types/src/config/Blocks';

type DataAdapterArgs = Parameters<
  NonNullable<BlockConfigBase['dataAdapter']>
>[0];

/**
 * Stores one field of the Separator block in its data.
 *
 * :param block: ID of the block being edited.
 * :param data: Current data of the block.
 * :param id: Name of the changed field.
 * :param onChangeBlock: Callback that saves the block data.
 * :param value: New value of the field.
 */
export const SeparatorDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
}: DataAdapterArgs): void => {
  onChangeBlock(block, {
    ...data,
    [id]: value,
  });
};

export default SeparatorDataAdapter;
