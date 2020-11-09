import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [myManu, setMyMenu] = useState(items)
  const [myCategory, setMyCategory] = useState(allCategories)

  const filterItem = (category) => {
    if (category === 'all') {
      setMyMenu(items)
      return
    }

    const myFilter = items.filter((item) => item.category === category)
    setMyMenu(myFilter)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h3>uprights manu project</h3>
          <div className="underline"></div>
        </div>
        <Categories myCategoryProp={myCategory} myButtonProp={filterItem} />
        <Menu categoryProp={myManu} />
      </section>
    </main>
  )
}

export default App
