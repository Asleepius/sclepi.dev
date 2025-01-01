import { defineMarkdocConfig, component  } from '@astrojs/markdoc/config';
import { Excalidraw } from './src/content/components/Excalidraw.markdoc'
import starlightMarkdoc from '@astrojs/starlight-markdoc';

export default defineMarkdocConfig({
  tags: {
    test: Excalidraw
  },
  extends: [starlightMarkdoc()],
});
