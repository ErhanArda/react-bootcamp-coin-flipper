import React, { Component } from 'react'
import './CoinFlipperStyles.css'
import Coin from "./Coin"


const options = ["Yazı", "Tura"];

const getRandomElFromArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex]
    return randomItem;
}

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStatus: options[0],
            results: [],
            rotate: false,

        }
    }

    start = () => {
        this.setState({
            rotate: true
        });
        const randomElement = getRandomElFromArr(options);
        setTimeout(() => {
            this.setState({
                currentStatus: randomElement,
                results: [...this.state.results, randomElement],
                rotate: false
            })
        }, 1000);

    }


    render() {
        const { currentStatus, rotate, results, start } = this.state;
        const heads = results.filter(randomItem => randomItem === "Yazı").length;
        const tails = results.filter(randomItem => randomItem === "Tura").length
        return (
            <div>
                <h1>Yazı ya da Tura</h1>

                <Coin currentStatus={currentStatus} rotate={rotate} start={start} />

                <button onClick={this.start}>Atış Yap</button>

                {
                    results.length > 0 && !rotate && <h3>{currentStatus} geldi</h3>

                }
                <p>Toplam <span className="CoinFlipper-number">{results.length}</span> atış yapıldı</p>
                <p><span className="CoinFlipper-number">{heads}</span> kez <b>Yazı</b> geldi</p>
                <p><span className="CoinFlipper-number">{tails}</span> kez <b>Tura</b> geldi</p>




            </div>
        )
    }
}

export default CoinFlipper