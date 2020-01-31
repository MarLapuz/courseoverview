import React, { useState, useEffect } from "react"

const CourseList = (props) => {
    const cards = props
    const [hoverStyle, setHoverStyle] = useState('')
    const [isHovered, setIsHovered] = useState({
      isActive: false,
      card: '',
      color: ''
    })

    const handleHover = (card) => {
      setIsHovered(
        {
          isActive: true,
          card: card.title,
          color: `#${card.color}`
        }
      )
    }

    const handleLeave = () => {
      setIsHovered({
        isActive: false,
        card: '',
        color: ''
      })
    }

    useEffect(() => {
      if(isHovered) {
        setHoverStyle(isHovered.color)
      } else {
        setHoverStyle('#1c1c1c')
      }
    }, [isHovered])

    return (
      <div className="card-list-container">
        {cards.list.map((card, i) => {
          return (
            <a key={i}
              href="/"
              className="card-item"
              role = "button"
              style={{
                color: '#fff',
                borderLeft: `7px solid #${card.color}`,
                backgroundColor: isHovered.card === card.title && isHovered.isActive ? hoverStyle : '#1c1c1c'
              }}
              onMouseEnter={() => handleHover(card)}
              onMouseLeave={handleLeave}
            >
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </a>
          )
        })}
      </div>
    )
}

export default CourseList
