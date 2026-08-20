import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Darshana & Manuel — 6–8 February, Guwahati' },
      {
        name: 'description',
        content:
          'Wedding schedule, travel, and visa information for Darshana & Manuel, 6–8 February in Guwahati, Assam.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="grain" />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
