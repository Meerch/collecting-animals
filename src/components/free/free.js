import React, {Component} from 'react'
import './free.scss'
import {prizes} from "../source/source";

export default class Free extends Component {
    constructor(props) {
        super(props)
        this.defaultIcon = "/assets/free/mark.png"
        this.state = {
            currentPrize: this.defaultIcon
        }
        this.lock = true
    }

    animateRandomPrize = (name) => {
        const currentPrize = `/assets/items/${name}.png`
        this.setState({currentPrize})
    }



    getRandomPrize = () => {
        let count = 0
        this.lock = false

        const animate = () => {
            const prize = prizes[getRandomInt(0, prizes.length)]
            this.animateRandomPrize(prize)
            return prize
        }

        let interval = setInterval(() => {
            count++
            const prize = animate()

            if(count === 3) {
                clearInterval(interval)
                this.setState({currentPrize: this.defaultIcon})
                this.props.addPrizeInventory(prize)
                this.lock = true
            }
        }, 500)
    }

    render() {
        const {currentPrize} = this.state

        return (
            <div className="free">
                <div className="free__wrapper">
                    <div className="free__field-prize">
                        <img className="free__field-icon" src={currentPrize} alt="?"/>
                    </div>
                    <button
                        onClick={() =>this.lock ? this.getRandomPrize() : false}
                        className="free__button">Take</button>
                </div>
            </div>
        )
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}