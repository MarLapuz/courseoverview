import React from "react"

const Header = (props) => {
    const header = props

    return (
      <header className="header">
        <h1 className="header-title">
          {header.title} <span className="header-subtitle">{header.subtitle}</span>
        </h1>
        <div className="header-search-wrapper">
          <input type="text"
            className="search-input"
            name="search"
            placeholder="Search Course Here..."
            onChange={(e) => header.onSearch(e)}
          />
          <img src={require('../assets/svg/search.svg')} className="search-icon" alt="Search Icon" />
        </div>
      </header>
    )
}

export default Header
