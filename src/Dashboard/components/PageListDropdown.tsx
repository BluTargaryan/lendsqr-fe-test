import { useRef, useEffect } from 'react'
import dropdown from '../../assets/images/dropdown.png'
import userNotification from '../../assets/images/user-notification-icon.png'
import type { Category } from '../pageList'

interface PageListDropdownProps {
  activePage: string;
  onPageChange: (page: string) => void;
  categories: Category[];
  isOpen: boolean;
  onToggle: () => void;
}

const PageListDropdown = ({
  activePage,
  onPageChange,
  categories,
  isOpen,
  onToggle
}: PageListDropdownProps) => {
  const pageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pageListRef.current && !pageListRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div 
      ref={pageListRef}
      className='aside-container category-container'
      onClick={onToggle}
    >
      <img src={userNotification} alt="notification" className='switch-org-icon'/>
      <span>{activePage}</span>
      <img src={dropdown} alt="dropdown" className='switch-org-icon'/>

      {isOpen && (
        <div className='category-page-list'>
          {categories.map((category, index) => (
            <div 
              key={`${category.name}-${category.pages[index]}`}
              className='category-page-item'
              onClick={(e) => {
                e.stopPropagation();
                onPageChange(category.pages[index]);
                onToggle();
              }}
            >
              <span>{category.pages[index]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageListDropdown;
