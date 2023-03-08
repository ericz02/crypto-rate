import './NavBar.css'
import axios from "axios";
import { useState, useEffect } from "react"
import Refresh from './components/Refresh';
import Conversions from './components/Conversions';
import Rates from './components/Rates'

function App() {

  const [page, setPage] = useState('rates');
  const [currency, setCurrency] = useState({});
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(null);


  const ratesHandler = () => {
    setPage('rates');
  }

  const conversionHandler = () => {
    setPage('conversion');
  }

  const fetchCurrency = async () => {
    const {data: {bpi, time}} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

    setLoading(true);
    setCurrency(bpi);
    
    console.log(bpi);
    setTime(time.updatedISO);
    
  }

  useEffect(() => {
    fetchCurrency();
  }, []);

  return (
    <div className="App">

      <div className="nav__bar">
        <button className="nav__btn" onClick={ratesHandler}>View Rates</button>
        <button className="nav__btn" onClick={conversionHandler}>View Conversions</button>
      </div>

      {page === 'rates' && <Rates fetchCurrency={fetchCurrency} currency={currency} setCurrency={setCurrency} loading={loading}/>}
      {page === 'conversion' && <Conversions fetchCurrency={fetchCurrency} currency={currency} setCurrency={setCurrency} loading={loading}/>}
      {time ? <Refresh time={time}/> : null}

    </div>
  )
}

export default App