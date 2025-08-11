import { useRef, useEffect } from 'react'
import dropdown from '../../assets/images/dropdown.png'
import type { Category } from '../pageList'

interface CategoryDropdownProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  categories: Category[];
  isOpen: boolean;
  onToggle: () => void;
}

const CategoryDropdown = ({
  activeCategory,
  onCategoryChange,
  categories,
  isOpen,
  onToggle
}: CategoryDropdownProps) => {
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
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
      ref={categoryRef}
      className='aside-container category-container'
      onClick={onToggle}
    >
      <span>{activeCategory.name}</span>
      <img src={dropdown} alt="dropdown" className='switch-org-icon'/>

      {isOpen && (
        <div className='category-page-list'>
          {categories.map((category) => (
            <div 
              key={category.name}
              className='category-page-item'
              onClick={(e) => {
                e.stopPropagation();
                onCategoryChange(category);
                onToggle();
              }}
            >
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
