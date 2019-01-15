import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './SingerCategories.less'
class SingerCategories extends Component {
  render() {
    const { singerCategories } = this.props
    console.log(this.props)
    return (
      <React.Fragment>
        {singerCategories.map(category => (
          <ul
            className="singerCategories__list main_border"
            key={category.category}
          >
            {category.data.map(childCategory => (
              <li
                className="singerCategories__item main_border_bottom"
                key={childCategory.path}
              >
                <NavLink
                  to={childCategory.path}
                  className="singerCategories__link"
                >
                  <div className="singerCategories__title">
                    {childCategory.name}
                  </div>
                  <button className="singerCategories_btn">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-right" />
                    </svg>
                  </button>
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </React.Fragment>
    )
  }
}
export default SingerCategories