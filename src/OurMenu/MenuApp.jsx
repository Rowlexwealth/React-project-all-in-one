import React, {useState} from 'react'
import Menu from '../OurMenu/Menu'
import Categories from '../OurMenu/Categories'
import items from '../JS Folder/Menu'

// Unique value and check step 2
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const MenuApp = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    // step 1 for category.jsx
    // All category
    const filterItems = (category) => {
      if(category === 'all') {
        setMenuItems(items);
        return;
      }
      // Breakfast category
      const newItems = items.filter((item)=> item.category===category);
      setMenuItems(newItems);
      // Breakfast category
    }
  return (
    <div>
        <div>
            <div>
                <h2 className='text-center text-blue-500 m-3 text-3xl underline '>Our Menu</h2>
            </div>
            {/* step 2, unique value and move to Catogory.jsx */}
            <Categories categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems}/>
        </div>
    </div>
  )
}

export default MenuApp