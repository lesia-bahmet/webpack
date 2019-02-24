// Network
import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';

export { PROJECT_ROOT };
export const SOURCE = resolve(PROJECT_ROOT, './source');
export const BUILD = resolve(PROJECT_ROOT, './build');
export const STATIC = resolve(PROJECT_ROOT, './static');
export const CHUNK_NAME_ASSET = '[name].[hash:5].[ext]';

export const HOST = 'localhost';
export const PORT = 3000;