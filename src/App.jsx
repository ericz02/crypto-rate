import { useState, useEffect} from 'react'
import axios from 'axios';
import NavBar from './components/navBar';
import './App.css'


// watched some video
// function App() {

//   // Bitcoin Price Index
//   const [bpiData, setBpiData] = useState({})

//   const fetchApiData = async () => {
//     const {data:{bpi}} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
//     // const bpiDataDerived = Object.keys(bpi).reduce((acc, currentCode) => {
//     //   acc[currentCode]= bpi[currentCode].rate_float
//     //   return acc
//     // }, [])
//     // setBpiData(bpiDataDerived)
//     setBpiData(bpi)
//   }

//   useEffect(() => {
//     fetchApiData()
    
//   }, [])

  
//   return (
//     <div className='App'>
//       <pre>{JSON.stringify(bpiData,0,1)} </pre>

//     </div>
//   )
// }

// export default App
