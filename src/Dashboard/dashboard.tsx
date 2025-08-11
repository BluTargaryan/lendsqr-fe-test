import { useState } from 'react'
import './dashboard.scss'
import Nav from './components/nav'
import userNotification from '../assets/images/user-notification-icon.png'
import dropdown from '../assets/images/dropdown.png'
import { pageList } from './pageList'
import CategoryDropdown from './components/CategoryDropdown'
import PageListDropdown from './components/PageListDropdown'
import { Outlet } from 'react-router-dom'
const dashboard = () => {
  const [activePageCategory, setActivePageCategory] = useState(pageList[0])
  const [isPageCategoryListOpen, setIsPageCategoryListOpen] = useState(false)
  const [activePage, setActivePage] = useState(activePageCategory.pages[0])
  const [isPageListOpen, setIsPageListOpen] = useState(false)
  return (
    <>
        <Nav/>

        <section className='dashboard-section'>
            <aside>
              <div className='aside-container switch-org-container'>
              <img src={userNotification} alt="user" className='switch-org-icon'/>
                <span>Switch Organization</span>
                <img src={dropdown} alt="user" className='switch-org-icon'/>
              </div>
              <div className='aside-container dashboard-title-container'>
              <img src={userNotification} alt="user" className='switch-org-icon'/>
              <span>Dashboard</span>
              </div>
              <CategoryDropdown
                activeCategory={activePageCategory}
                onCategoryChange={setActivePageCategory}
                categories={pageList}
                isOpen={isPageCategoryListOpen}
                onToggle={() => setIsPageCategoryListOpen(!isPageCategoryListOpen)}
              />

              <PageListDropdown
                activePage={activePage}
                onPageChange={setActivePage}
                categories={pageList}
                isOpen={isPageListOpen}
                onToggle={() => setIsPageListOpen(!isPageListOpen)}
              />
            </aside>

            <main className='main-container'>
              <Outlet/>
            </main>
        </section>
    </>
  )
}

export default dashboard