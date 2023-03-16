import { Layout } from './Layout'
import { SidebarContent } from './SidebarContent'
import { MainContent } from './MainContent'

function App() {
  return <Layout sidebar={<SidebarContent />} main={<MainContent />} />
}

export default App
