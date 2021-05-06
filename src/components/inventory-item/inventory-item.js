import React from 'react'
import './inventory-item.scss'

const InventoryItem = ({elements: {name}}) => {
    const src = `/assets/items/${name}.png`

    return (
        <div className="inventory__item">
            <img src={src} alt={name} className="inventory__item-image"></img>
            <div className="inventory__item-subtitle">{name}</div>
        </div>
    )
}

export default InventoryItem