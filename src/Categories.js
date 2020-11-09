import React from 'react'

const Categories = ({ myCategoryProp, myButtonProp }) => {
  return (
    <div className="btn-container">
      {myCategoryProp.map((eachItem, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => myButtonProp(eachItem)}
          >
            {eachItem}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
