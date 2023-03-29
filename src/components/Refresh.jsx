import { useState, useEffect } from 'react'

const Refresh = ({time}) => {

    const [refresh, setRefresh] = useState(false);

    const timeToRefresh = 300000;

    useEffect(() => {
        const interval = setInterval(() => {
          setRefresh(true);
          timeToRefresh-1000;
        }, timeToRefresh)

        return () => clearInterval(interval);
      }, [timeToRefresh])

      const canRefresh = () => {
        if(!refresh) {
            alert("Wait 5 minutes before refreshing");
        } else {
            window.location.reload();
            alert("Refreshing");
        }
      }

    return <div>
      <p className="time__refresh">
      Last Refresh Time: {new Date(time).toLocaleString()}<br/>
      <button className="refresh__btn" onClick={canRefresh}>Click To Refresh</button>
      </p>
    
    </div>
}

export default Refresh;
