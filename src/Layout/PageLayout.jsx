import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

function PageLayout({ children, showSidebar = true }) {
  return (
    <div className="page-layout">
      <Header />

      <div className="layout-content">
        <main>{children}</main>

        {showSidebar && <Sidebar />}
      </div>

      <Footer />
    </div>
  )
}

export default PageLayout