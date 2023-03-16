import { useResizeSidebar } from '../hooks/use-resize-sidebar'
import '../styles/Layout.css'

type LayoutProps = {
  sidebar: React.ReactNode
  sidebarInitialSize?: number
  sidebarMinWidth?: number
  sidebarMaxWidth?: number
  main: React.ReactNode
}

function Layout({
  sidebar,
  sidebarInitialSize = 300,
  sidebarMinWidth = 200,
  sidebarMaxWidth = 500,
  main,
}: LayoutProps) {
  const { size, resizing, startResizing, stopResizing, updateSize, reset } =
    useResizeSidebar(sidebarInitialSize, sidebarMinWidth, sidebarMaxWidth)

  return (
    <div
      className={`container ${resizing ? 'resizing' : ''}`}
      onPointerMove={updateSize}
      onPointerUp={stopResizing}
    >
      <div className='sidebar-wrapper' style={{ flexBasis: size }}>
        <div className='sidebar-content'>{sidebar}</div>
        <div
          className={`sidebar-border ${resizing ? 'resizing' : ''}`}
          onPointerDown={startResizing}
          onDoubleClick={reset}
        ></div>
      </div>
      <div className='main-wrapper'>
        <main>{main}</main>
      </div>
    </div>
  )
}

export { Layout }
