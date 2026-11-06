import { describe, it, expect } from 'vitest';
import { createIntl } from 'react-intl';
import { applySchemaEnhancer } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';
import { SeparatorSchema, SeparatorStyleEnhancer } from './schema';

// The @blocks-schema endpoint calls blockSchema with the intl object only.
const intl = createIntl({ locale: 'en', messages: {} });

describe('SeparatorSchema', () => {
  it('resolves with only intl, as the endpoint calls it', () => {
    const schema = SeparatorSchema({ intl });
    expect(schema.title).toBe('Separator');
    expect(schema.block).toBe('separator');
  });

  it('gets the styling fields from the block schemaEnhancer', () => {
    // The same enhancer chain the endpoint applies to the block schema.
    const schema = applySchemaEnhancer({
      schema: SeparatorSchema({ intl }),
      formData: { '@type': 'separator' },
      intl,
      blocksConfig: {
        separator: { id: 'separator', schemaEnhancer: SeparatorStyleEnhancer },
      },
    });
    const fields = schema.properties.styles.schema.fieldsets[0].fields;
    expect(fields).toEqual(
      expect.arrayContaining([
        'blockWidth:noprefix',
        'align:noprefix',
        'shortLine',
      ]),
    );
    expect(
      schema.properties.styles.schema.properties['align:noprefix'].disabled,
    ).toBe(true);
  });
});
