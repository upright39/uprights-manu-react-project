import React from 'react'

const Menu = ({ categoryProp }) => {
  return (
    <div className="section-center">
      {categoryProp.map((item) => {
        const { id, title, catigory, price, img, desc } = item
        return (
          <article key={id} className="menu-item">
            <img src={img} alt="name" className="photo" />

            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
