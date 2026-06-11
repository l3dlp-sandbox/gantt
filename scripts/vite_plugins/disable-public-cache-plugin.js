// vite.config.js
import sirv from 'sirv';

export default function disablePublicCachePlugin(publicDir) {
  return {
    name: 'disable-public-cache',
    configureServer(server) {
      // Remove existing middleware that serves the public directory
      const index = server.middlewares.stack.findIndex(
        (mw) => mw.handle.name === 'viteServePublicMiddleware'
      );
      if (index >= 0) {
        server.middlewares.stack.splice(index, 1);
      }

      // Add custom middleware to serve public directory with no-cache headers
      const serve = sirv(publicDir, {
        dev: true,
        setHeaders: (res) => {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        },
      });
      server.middlewares.use(serve);
    },
  };
}