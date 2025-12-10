//@ts-ignore
import path from 'path';
//@ts-ignore
import { fileURLToPath } from 'url';
//@ts-ignore
import handlebars from 'vite-plugin-handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  base: '/pipeline-test/',
  build: {
    //minify: 'terser',
    //minify: 'esbuild',
    minify: false,
    /* terserOptions: {
      keep_classnames: true,
    }, */
  },
  css: {
    preprocessorOptions: {
      scss: {
        logger: {
          warn: function(message: string, options: { deprecation: boolean }) {
            if(options.deprecation) return;
            console.warn(message);
          }
        }
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'src'),
    }),
  ],
}