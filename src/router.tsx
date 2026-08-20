import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    // Must match `base` in vite.config.ts (GitHub Pages project page).
    basepath: '/wedding',
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
