import { useState, useRef, useEffect } from 'react'
import './dashboard.scss'
import Nav from './components/nav'
import userNotification from '../assets/images/user-notification-icon.png'
import dropdown from '../assets/images/dropdown.png'
import { pageList } from './pageList'
const dashboard = () => {
  const categoryRef = useRef<HTMLDivElement>(null);
  const [activePageCategory, setActivePageCategory] = useState(pageList[0])
  const [isPageCategoryListOpen, setIsPageCategoryListOpen] = useState(false)
  const [activePage, setActivePage] = useState(activePageCategory.pages[0])
  const pageListRef = useRef<HTMLDivElement>(null);
  const [isPageListOpen, setIsPageListOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsPageCategoryListOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])
  return (
    <div>
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
              <div 
                ref={categoryRef}
                className='aside-container category-container'
                onClick={() => setIsPageCategoryListOpen(!isPageCategoryListOpen)}
              >
                <span>{activePageCategory.name}</span>
                <img src={dropdown} alt="user" className='switch-org-icon'/>

                {
                  isPageCategoryListOpen && (
                    <div className='category-page-list'>
                      {
                        pageList.map((category) => (
                          <div className={`category-page-item `} onClick={() => setActivePageCategory(category)}>
                            <span>{category.name}</span>
                          </div>
                          ))
                      }
                    </div>
                  )
                }
                </div>

                <div 
                ref={pageListRef}
                className='aside-container category-container'
                onClick={() => setIsPageListOpen(!isPageListOpen)}
              >
                <img src={userNotification} alt="user" className='switch-org-icon'/>
                <span>{activePage}</span>
                <img src={dropdown} alt="user" className='switch-org-icon'/>

                {
                  isPageListOpen && (
                    <div className='category-page-list'>
                      {
                        pageList.map((page, index) => (
                          <div className={`category-page-item `} onClick={() => setActivePage(page.pages[index])}>
                            <span>{page.pages[index]}</span>
                          </div>
                          ))
                      }
                    </div>
                  )
                }
                </div>
            </aside>
        </section>
    </div>
  )
}

export default dashboard