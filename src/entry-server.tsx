import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from '@/lib/helmetAsync';
import App from './App';

interface RenderResult {
  appHtml: string;
  headTags: string;
  htmlAttributes: string;
  bodyAttributes: string;
}

interface HelmetContext {
  helmet?: HelmetServerState;
}

export function render(url: string): RenderResult {
  const helmetContext: HelmetContext = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;

  const htmlAttributes = helmet?.htmlAttributes?.toString() ?? '';
  const bodyAttributes = helmet?.bodyAttributes?.toString() ?? '';
  const headTags = [
    helmet?.title?.toString() ?? '',
    helmet?.priority?.toString() ?? '',
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
    helmet?.script?.toString() ?? '',
  ]
    .filter(Boolean)
    .join('\n');

  return {
    appHtml,
    headTags,
    htmlAttributes,
    bodyAttributes,
  };
}
