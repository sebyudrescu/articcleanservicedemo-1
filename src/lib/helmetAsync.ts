import * as HelmetAsyncNamespace from 'react-helmet-async';

type HelmetModule = typeof import('react-helmet-async');

const rawModule = HelmetAsyncNamespace as unknown as {
  Helmet?: HelmetModule['Helmet'];
  HelmetProvider?: HelmetModule['HelmetProvider'];
  default?: HelmetModule;
};

const helmetModule: HelmetModule =
  rawModule.Helmet && rawModule.HelmetProvider
    ? (rawModule as HelmetModule)
    : rawModule.default ?? (rawModule as HelmetModule);

export const { HelmetProvider, Helmet } = helmetModule;
export type { HelmetServerState } from 'react-helmet-async';
export default helmetModule;
