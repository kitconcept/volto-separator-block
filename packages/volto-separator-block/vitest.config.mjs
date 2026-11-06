import { defineConfig } from 'vitest/config';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
// Volto's own dependencies, as resolved from the Volto checkout made by `make install`.
const voltoRequire = createRequire(
  path.resolve(here, '../../core/packages/volto/package.json'),
);

export default defineConfig({
  resolve: {
    alias: {
      // The block code imports Volto's registry and helpers, which live in the
      // Volto checkout made by `make install`.
      '@plone/volto': path.resolve(here, '../../core/packages/volto/src'),
      // The add-on uses react-intl at runtime only through Volto.
      'react-intl': voltoRequire.resolve('react-intl'),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
  },
});
