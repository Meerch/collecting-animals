import React, {Component} from 'react'

import './app.scss'
import Inventory from "../inventory";
import Free from "../free";
import Search from "../search/search";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prizes: [],
            term: ''
        }
        this.maxId = 1
    }

    addPrizeInventory = name => {

        const newPrize = {name, id: this.maxId++}

        this.setState(({prizes}) => {
            const newArr = [...prizes, newPrize]
            return {
                prizes: newArr
            }
        })
    }

    searchPrize = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = term => {
        this.setState({term})
    }

    render() {
        const {prizes, term} = this.state
        const visiblePrizes = this.searchPrize(prizes, term)

        return (
            <>
                <Search  onUpdateSearch={this.onUpdateSearch}/>
                <div className="wrapper">
                    <Inventory  prizes={visiblePrizes}/>
                    <Free addPrizeInventory={this.addPrizeInventory}/>
                </div>
            </>
        )
    }
}
