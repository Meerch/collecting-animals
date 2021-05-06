import React from 'react'
import './inventory.scss'
import InventoryItem from "../inventory-item/inventory-item";

const Inventory = ({prizes}) => {

    const elements = prizes.map(item => {
        const {id, ...items} = item
        return (
            <InventoryItem key={id} elements={items} />
        )
    })

    return (
        <div className="inventory">
            {elements}
        </div>
    )
}

export default Inventory