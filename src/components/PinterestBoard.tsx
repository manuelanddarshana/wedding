import { useEffect } from 'react'

// Pinterest's official embed widget (no API key needed, but it is a
// third-party script loaded at runtime — see the "images later" note in
// AGENTS.md/readme). Docs: https://developers.pinterest.com/docs/widgets/boards/
const PINIT_SRC = 'https://assets.pinterest.com/js/pinit.js'

declare global {
  interface Window {
    PinUtils?: { build: () => void }
  }
}

function loadPinitScript() {
  if (document.querySelector(`script[src="${PINIT_SRC}"]`)) {
    // Script already present from an earlier board on the page — it only
    // scans the DOM once on load, so re-trigger it for this board's anchor.
    window.PinUtils?.build()
    return
  }
  const script = document.createElement('script')
  script.src = PINIT_SRC
  script.async = true
  document.body.appendChild(script)
}

export function PinterestBoard({ url }: { url: string }) {
  useEffect(() => {
    loadPinitScript()
  }, [url])

  return (
    <div className="mt-2 overflow-x-auto">
      <a
        data-pin-do="embedBoard"
        data-pin-board-width="300"
        data-pin-scale-height="240"
        data-pin-scale-width="80"
        href={url}
      >
        View the Pinterest board
      </a>
    </div>
  )
}
