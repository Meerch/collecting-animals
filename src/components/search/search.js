import React, {Component} from 'react'
import './search.scss'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = e => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }


    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Поиск по предметам"
                    onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}
