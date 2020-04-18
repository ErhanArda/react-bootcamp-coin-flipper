import React from 'react';
import "./CoinStyles.css";
import CoinTail from "../tail.png";
import CoinHead from "../head.png";

const Coin = (props) => {
    const { currentStatus, rotate } = props;

    return (
        <div className="Coin-container">
            <div className={`Coin ${rotate && "Coin-rotate"}`}>
                <img src={CoinTail}
                    className={
                        currentStatus === "Yazı" ? "Coin-back" : "Coin-front"
                    }
                    alt=""
                />
                <img src={CoinHead}
                    className={
                        currentStatus === "Yazı" ? "Coin-front" : "Coin-back"
                    } alt="" />
            </div>
        </div>
    );
};

export default Coin;