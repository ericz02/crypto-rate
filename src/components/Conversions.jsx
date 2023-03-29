import { useState } from "react";

const Conversions = ({currency, loading}) => {

    const [amount, setAmount] = useState(1);
    const [index, setIndex] = useState(0);
    const [currencies, setCurrencies] = useState('USD');

    let cUSD = currency.USD.rate_float;
    let cEUR = currency.EUR.rate_float;
    let cGBP = currency.GBP.rate_float;

    let rates = [cUSD, cEUR, cGBP];

    const amountHandler = (e) => {
        setAmount(e.target.value)
    }

    const currencyHandler = (e) => {
        if(e.target.value === 'USD') {
            setIndex(0);
        } else if (e.target.value === 'EUR') {
            setIndex(1);
        } else {
            setIndex(2);
        }
        setCurrencies(e.target.value);
    };


    return <div className="conversion__container">

        <h1 className='conversion__header'>Conversions</h1>
        <div className="currency__div">

            <label htmlFor="currencies">Pick the Currency:</label>
            <input type="text" value={amount} onChange={amountHandler}></input>

            <select className="curr__selector" name="currencies" id="currencies" value={currencies} onChange={currencyHandler}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>

            <p>{amount} {currencies} = {amount / rates[index]} BTC</p>
            
        </div>
    </div>
}

export default Conversions;