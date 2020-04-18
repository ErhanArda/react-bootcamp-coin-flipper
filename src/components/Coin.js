import React from 'react';
import "./CoinStyles.css";
import CoinTail from "../tail.png";
import CoinHead from "../head.png";

const Coin = (props) => {
    return (
        <div className="Coin-container">
            <div className={`Coin ${props.rotate && "Coin-rotate"}`}>
                <img src={CoinTail}
                    onClick={props.start}
                    className={
                        props.currentStatus === "tail" ? "Coin-back" : "Coin-front"
                    }
                    alt=""
                />
                <img src={CoinHead}
                    onClick={props.start}
                    className={
                        props.currentStatus === "yazı" ? "Coin-front" : "Coin-back"
                    } alt="" />
            </div>
        </div>
    );
};

export default Coin;